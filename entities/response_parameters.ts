class ResponseParameters {
    private _migrateToChatId: number | null;
    private _retryAfter: number | null;

    constructor(params: {
        migrateToChatId?: number | null;
        retryAfter?: number | null;
    }) {
        if (typeof params.migrateToChatId === 'undefined' || params.migrateToChatId === null) {
            this._migrateToChatId = null;
        } else {
            this._migrateToChatId = params.migrateToChatId;
        }
        if (typeof params.retryAfter === 'undefined' || params.retryAfter === null) {
            this._retryAfter = null;
        } else {
            this._retryAfter = params.retryAfter;
        }
    }

    get migrateToChatId(): number | null {
        return this._migrateToChatId;
    }
    get retryAfter(): number | null {
        return this._retryAfter;
    }
}

export default ResponseParameters;