class GetUserProfilePhotosParam {
    private _userId: number;
    private _offset: number | null;
    private _limit: number | null;

    constructor(params: {
        userId: number;
        offset?: number | null;
        limit?: number | null;
    }) {
        this._userId = params.userId;
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
    }

    get userId(): number {
        return this._userId;
    }
    get offset(): number | null {
        return this._offset;
    }
    get limit(): number | null {
        return this._limit;
    }
}

export default GetUserProfilePhotosParam;