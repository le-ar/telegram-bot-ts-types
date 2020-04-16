import InputFile from '../entities/input_file';

class SetStickerSetThumbParam {
    private _name: string;
    private _userId: number;
    private _thumb: InputFile | string | null;

    constructor(params: {
        name: string;
        userId: number;
        thumb?: InputFile | string | null;
    }) {
        this._name = params.name;
        this._userId = params.userId;
        if (typeof params.thumb === 'undefined' || params.thumb === null) {
            this._thumb = null;
        } else {
            this._thumb = params.thumb;
        }
    }

    get name(): string {
        return this._name;
    }
    get userId(): number {
        return this._userId;
    }
    get thumb(): InputFile | string | null {
        return this._thumb;
    }
}

export default SetStickerSetThumbParam;