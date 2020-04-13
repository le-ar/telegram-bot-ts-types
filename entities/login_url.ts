class LoginUrl {
    private _url: string;
    private _forwardText: string | null;
    private _botUsername: string | null;
    private _requestWriteAccess: boolean | null;

    constructor(params: {
        url: string;
        forwardText?: string | null;
        botUsername?: string | null;
        requestWriteAccess?: boolean | null;
    }) {
        this._url = params.url;
        if (typeof params.forwardText === 'undefined' || params.forwardText === null) {
            this._forwardText = null;
        } else {
            this._forwardText = params.forwardText;
        }
        if (typeof params.botUsername === 'undefined' || params.botUsername === null) {
            this._botUsername = null;
        } else {
            this._botUsername = params.botUsername;
        }
        if (typeof params.requestWriteAccess === 'undefined' || params.requestWriteAccess === null) {
            this._requestWriteAccess = null;
        } else {
            this._requestWriteAccess = params.requestWriteAccess;
        }
    }

    get url(): string {
        return this._url;
    }
    get forwardText(): string | null {
        return this._forwardText;
    }
    get botUsername(): string | null {
        return this._botUsername;
    }
    get requestWriteAccess(): boolean | null {
        return this._requestWriteAccess;
    }
}

export default LoginUrl;