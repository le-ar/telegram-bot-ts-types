class AnswerPreCheckoutQueryParam {
    private _preCheckoutQueryId: string;
    private _ok: boolean;
    private _errorMessage: string | null;

    constructor(params: {
        preCheckoutQueryId: string;
        ok: boolean;
        errorMessage?: string | null;
    }) {
        this._preCheckoutQueryId = params.preCheckoutQueryId;
        this._ok = params.ok;
        if (typeof params.errorMessage === 'undefined' || params.errorMessage === null) {
            this._errorMessage = null;
        } else {
            this._errorMessage = params.errorMessage;
        }
    }

    get preCheckoutQueryId(): string {
        return this._preCheckoutQueryId;
    }
    get ok(): boolean {
        return this._ok;
    }
    get errorMessage(): string | null {
        return this._errorMessage;
    }
}

export default AnswerPreCheckoutQueryParam;