class AnswerCallbackQueryParam {
    private _callbackQueryId: string;
    private _text: string | null;
    private _showAlert: boolean | null;
    private _url: string | null;
    private _cacheTime: number | null;

    constructor(params: {
        callbackQueryId: string;
        text?: string | null;
        showAlert?: boolean | null;
        url?: string | null;
        cacheTime?: number | null;
    }) {
        this._callbackQueryId = params.callbackQueryId;
        if (typeof params.text === 'undefined' || params.text === null) {
            this._text = null;
        } else {
            this._text = params.text;
        }
        if (typeof params.showAlert === 'undefined' || params.showAlert === null) {
            this._showAlert = null;
        } else {
            this._showAlert = params.showAlert;
        }
        if (typeof params.url === 'undefined' || params.url === null) {
            this._url = null;
        } else {
            this._url = params.url;
        }
        if (typeof params.cacheTime === 'undefined' || params.cacheTime === null) {
            this._cacheTime = null;
        } else {
            this._cacheTime = params.cacheTime;
        }
    }

    get callbackQueryId(): string {
        return this._callbackQueryId;
    }
    get text(): string | null {
        return this._text;
    }
    get showAlert(): boolean | null {
        return this._showAlert;
    }
    get url(): string | null {
        return this._url;
    }
    get cacheTime(): number | null {
        return this._cacheTime;
    }
}

export default AnswerCallbackQueryParam;