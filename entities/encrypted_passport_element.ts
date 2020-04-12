import PassportFile from './passport_file';

class EncryptedPassportElement {
    private _type: string;
    private _data: string | null;
    private _phoneNumber: string | null;
    private _email: string | null;
    private _files: PassportFile[] | null;
    private _frontSide: PassportFile | null;
    private _reverseSide: PassportFile | null;
    private _selfie: PassportFile | null;
    private _translation: PassportFile[] | null;
    private _hash: string;

    constructor(params: {
        type: string;
        data?: string | null;
        phoneNumber?: string | null;
        email?: string | null;
        files?: PassportFile[] | null;
        frontSide?: PassportFile | null;
        reverseSide?: PassportFile | null;
        selfie?: PassportFile | null;
        translation?: PassportFile[] | null;
        hash: string;
    }) {
        this._type = params.type;
        if (typeof params.data === 'undefined' || params.data === null) {
            this._data = null;
        } else {
            this._data = params.data;
        }
        if (typeof params.phoneNumber === 'undefined' || params.phoneNumber === null) {
            this._phoneNumber = null;
        } else {
            this._phoneNumber = params.phoneNumber;
        }
        if (typeof params.email === 'undefined' || params.email === null) {
            this._email = null;
        } else {
            this._email = params.email;
        }
        if (typeof params.files === 'undefined' || params.files === null) {
            this._files = null;
        } else {
            this._files = params.files;
        }
        if (typeof params.frontSide === 'undefined' || params.frontSide === null) {
            this._frontSide = null;
        } else {
            this._frontSide = params.frontSide;
        }
        if (typeof params.reverseSide === 'undefined' || params.reverseSide === null) {
            this._reverseSide = null;
        } else {
            this._reverseSide = params.reverseSide;
        }
        if (typeof params.selfie === 'undefined' || params.selfie === null) {
            this._selfie = null;
        } else {
            this._selfie = params.selfie;
        }
        if (typeof params.translation === 'undefined' || params.translation === null) {
            this._translation = null;
        } else {
            this._translation = params.translation;
        }
        this._hash = params.hash;
    }

    get type(): string {
        return this._type;
    }
    get data(): string | null {
        return this._data;
    }
    get phoneNumber(): string | null {
        return this._phoneNumber;
    }
    get email(): string | null {
        return this._email;
    }
    get files(): PassportFile[] | null {
        return this._files;
    }
    get frontSide(): PassportFile | null {
        return this._frontSide;
    }
    get reverseSide(): PassportFile | null {
        return this._reverseSide;
    }
    get selfie(): PassportFile | null {
        return this._selfie;
    }
    get translation(): PassportFile[] | null {
        return this._translation;
    }
    get hash(): string {
        return this._hash;
    }
}

export default EncryptedPassportElement;