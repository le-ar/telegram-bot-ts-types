import User from './user';
import Location from './location';

class InlineQuery {
    private _id: string;
    private _from: User;
    private _location: Location | null;
    private _query: string;
    private _offset: string;

    constructor(params: {
        id: string;
        from: User;
        location?: Location | null;
        query: string;
        offset: string;
    }) {
        this._id = params.id;
        this._from = params.from;
        if (typeof params.location === 'undefined' || params.location === null) {
            this._location = null;
        } else {
            this._location = params.location;
        }
        this._query = params.query;
        this._offset = params.offset;
    }

    get id(): string {
        return this._id;
    }
    get from(): User {
        return this._from;
    }
    get location(): Location | null {
        return this._location;
    }
    get query(): string {
        return this._query;
    }
    get offset(): string {
        return this._offset;
    }
}

export default InlineQuery;