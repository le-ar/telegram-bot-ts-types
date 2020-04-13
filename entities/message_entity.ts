import User from './user';

class MessageEntity {
    private _type: string;
    private _offset: number;
    private _length: number;
    private _url: string | null;
    private _user: User | null;
    private _language: string | null;

    constructor(params: {
        type: string;
        offset: number;
        length: number;
        url?: string | null;
        user?: User | null;
        language?: string | null;
    }) {
        this._type = params.type;
        this._offset = params.offset;
        this._length = params.length;
        if (typeof params.url === 'undefined' || params.url === null) {
            this._url = null;
        } else {
            this._url = params.url;
        }
        if (typeof params.user === 'undefined' || params.user === null) {
            this._user = null;
        } else {
            this._user = params.user;
        }
        if (typeof params.language === 'undefined' || params.language === null) {
            this._language = null;
        } else {
            this._language = params.language;
        }
    }

    get type(): string {
        return this._type;
    }
    get offset(): number {
        return this._offset;
    }
    get length(): number {
        return this._length;
    }
    get url(): string | null {
        return this._url;
    }
    get user(): User | null {
        return this._user;
    }
    get language(): string | null {
        return this._language;
    }
}

export default MessageEntity;