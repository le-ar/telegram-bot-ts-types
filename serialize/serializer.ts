import InputFile from '../entities/input_file';
import FormData from 'formdata-node';

type ConstructorParams = {
    [key: string]: {
        type: string,
        required: boolean,
    }
};

class Serializer<T> {
    private static Serializers: { [key: string]: Serializer<any> } = {};

    private className: string;
    private tConstructor: new (p?: any) => T;
    private constructorParams: ConstructorParams;
    private paramsCamelToSnakeCase: { [key: string]: string } = {};
    private paramsSnakeToCamelCase: { [key: string]: string } = {};

    constructor(c: new (p?: any) => T, className: string, params: ConstructorParams) {
        this.tConstructor = c;

        this.className = className;
        this.constructorParams = params;
        this.setJsonAndParamNamesRef(params);
        Serializer.Serializers[className] = this;
    }

    private setJsonAndParamNamesRef(params: ConstructorParams): void {
        for (let param in params) {
            let snakeCase =
                param.replace(
                    /\.?([A-Z])/g,
                    (x, y) => "_" + y.toLowerCase())
                    .replace(/^_/, "");
            this.paramsSnakeToCamelCase[snakeCase] = param;

            this.paramsCamelToSnakeCase[param] = snakeCase;
        }
    }

    fromJson(json: any): T {
        if (!(this.checkJson(json))) {
            throw new Error('Wrong json for type "' + this.className + '". Json: ' + json + '\n');
        }

        let params: { [key: string]: any } = {};
        for (let paramName in this.constructorParams) {
            let param = this.constructorParams[paramName];
            if (this.paramsCamelToSnakeCase[paramName] in json) {
                let newParam = json[this.paramsCamelToSnakeCase[paramName]];
                try {
                    newParam = this.deserialize(newParam, param.type);
                    if (newParam === null) {
                        continue;
                    }
                } catch (e) {
                    continue;
                }
                params[paramName] = newParam;
            }
        }

        return new this.tConstructor(params);
    }

    private deserialize(value: any, type: string): any {
        if (type in Serializer.Serializers) {
            return Serializer.Serializers[type].fromJson(value);
        }
        if (type[type.length - 2] === '[' && type[type.length - 1] === ']') {
            if (!Array.isArray(value)) {
                throw new Error('Wrong json for type array "' + this.className + '". Json: ' + JSON.stringify(value) + '\n');
            }
            let result: any[] = [];
            for (let element of value) {
                try {
                    result.push(this.deserialize(element, type.slice(0, type.length - 2)));
                } catch (e) { }
            }
            return result;
        }
        if (type.indexOf(' | ') !== -1) {
            let params = type.split(' | ');
            for (let currType of params) {
                if (currType in Serializer.Serializers) {
                    return Serializer.Serializers[currType].fromJson(value);
                }
            }
        }

        return value;
    }

    private checkJson(json: any) {
        return (
            json !== null &&
            typeof json === 'object' &&
            Object.keys(this.constructorParams).every(p => !this.constructorParams[p].required || this.paramsCamelToSnakeCase[p] in json) &&
            Object.keys(json).every(p => this.paramsSnakeToCamelCase[p] in this.constructorParams)
        );
    }

    checkParamsAndReturnInSnakeCaseIfOk(params: any): {
        ok: boolean;
        params?: { [key: string]: any };
    } {
        let ok = (
            params !== null &&
            typeof params === 'object' &&
            Object.keys(this.constructorParams).every(p => !this.constructorParams[p].required || p in params) &&
            Object.keys(params).every(p => p in this.constructorParams)
        );
        if (!ok) {
            return { ok: false };
        }

        let snakeParams: { [key: string]: any } = {};
        for (let param in params) {
            snakeParams[this.paramsCamelToSnakeCase[param]] = params[param];
        }
        return {
            ok: true,
            params: snakeParams
        };
    }

    toFormData(model: T): FormData {
        let formData = new FormData();
        let serialized = this.toJsonObject(model, formData);
        for (let param in serialized) {
            let val = serialized[param];
            if (typeof val === 'object') {
                val = JSON.stringify(val);
            }
            formData.set(param, val);
        }
        return formData;
    }

    toJsonString(model: T): string {
        return JSON.stringify(this.toJsonObject(model));
    }

    toJsonObject(model: T, formData?: FormData): { [key: string]: any } {
        let json: { [key: string]: any } = {};
        let jsonModel: { [key: string]: any } = model;

        for (let paramName in this.constructorParams) {
            let param = this.constructorParams[paramName];
            if (typeof jsonModel[paramName] !== 'undefined' && jsonModel[paramName] !== null) {
                let newParam = jsonModel[paramName];
                if (newParam instanceof InputFile) {
                    if (!(formData instanceof FormData)) {
                        throw new Error('You can\'t serialize Buffer to json. Use "multipart/form-data" instead');
                    }
                    let countFiles = 0;
                    let countFilesFromFormData = formData.get('files__count');
                    if (typeof countFilesFromFormData === 'string') {
                        if (!Number.isNaN(parseInt(countFilesFromFormData))) {
                            countFiles = parseInt(countFilesFromFormData);
                        }
                    }
                    formData.append('file__' + (++countFiles), newParam.file, newParam.name);
                    formData.set('files__count', countFiles.toString());
                    json[this.paramsCamelToSnakeCase[paramName]] = 'attach://file__' + countFiles;
                    continue;
                }
                try {
                    newParam = this.serialize(newParam, param.type);
                    if (newParam === null) {
                        continue;
                    }
                } catch (e) {
                    continue;
                }
                json[this.paramsCamelToSnakeCase[paramName]] = newParam;
            }
        }

        return json;
    }

    private serialize(value: any, type: string): any {
        if (type in Serializer.Serializers) {
            return Serializer.Serializers[type].toJsonObject(value);
        }
        if (type[type.length - 2] === '[' && type[type.length - 1] === ']') {
            if (!Array.isArray(value)) {
                throw new Error('Wrong json for type array "' + this.className + '". Json: ' + JSON.stringify(value) + '\n');
            }
            let result: any[] = [];
            for (let element of value) {
                try {
                    result.push(this.serialize(element, type.slice(0, type.length - 2)));
                } catch (e) { }
            }
            return result;
        }
        if (type.indexOf(' | ') !== -1) {
            let params = type.split(' | ');
            for (let currType of params) {
                if (currType in Serializer.Serializers) {
                    return Serializer.Serializers[currType].toJsonObject(value);
                }
            }
        }

        return value;
    }
}

export default Serializer;
export { Serializer, ConstructorParams };