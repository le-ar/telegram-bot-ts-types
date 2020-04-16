class GetUpdatesParam {
    private _offset: number | null;
    private _limit: number | null;
    private _timeout: number | null;
    private _allowedUpdates: string[] | null;

    constructor(params: {
        offset?: number | null;
        limit?: number | null;
        timeout?: number | null;
        allowedUpdates?: string[] | null;
    }) {
        if (typeof params.offset === 'undefined' || params.offset === null) {
            this._offset = null;
        } else {
            this._offset = params.offset;
        }
        if (typeof params.limit === 'undefined' || params.limit === null) {
            this._limit = null;
        } else {
            this._limit = params.limit;
        }
        if (typeof params.timeout === 'undefined' || params.timeout === null) {
            this._timeout = null;
        } else {
            this._timeout = params.timeout;
        }
        if (typeof params.allowedUpdates === 'undefined' || params.allowedUpdates === null) {
            this._allowedUpdates = null;
        } else {
            this._allowedUpdates = params.allowedUpdates;
        }
    }

    get offset(): number | null {
        return this._offset;
    }
    get limit(): number | null {
        return this._limit;
    }
    get timeout(): number | null {
        return this._timeout;
    }
    get allowedUpdates(): string[] | null {
        return this._allowedUpdates;
    }
}

export default GetUpdatesParam;