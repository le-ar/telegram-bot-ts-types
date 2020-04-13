import User from './user';
import Location from './location';

class ChosenInlineResult {
    private _resultId: string;
    private _from: User;
    private _location: Location | null;
    private _inlineMessageId: string | null;
    private _query: string;

    constructor(params: {
        resultId: string;
        from: User;
        location?: Location | null;
        inlineMessageId?: string | null;
        query: string;
    }) {
        this._resultId = params.resultId;
        this._from = params.from;
        if (typeof params.location === 'undefined' || params.location === null) {
            this._location = null;
        } else {
            this._location = params.location;
        }
        if (typeof params.inlineMessageId === 'undefined' || params.inlineMessageId === null) {
            this._inlineMessageId = null;
        } else {
            this._inlineMessageId = params.inlineMessageId;
        }
        this._query = params.query;
    }

    get resultId(): string {
        return this._resultId;
    }
    get from(): User {
        return this._from;
    }
    get location(): Location | null {
        return this._location;
    }
    get inlineMessageId(): string | null {
        return this._inlineMessageId;
    }
    get query(): string {
        return this._query;
    }
}

export default ChosenInlineResult;