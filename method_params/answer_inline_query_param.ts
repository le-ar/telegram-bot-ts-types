import InlineQueryResult from '../entities/inline_query_result';

class AnswerInlineQueryParam {
    private _inlineQueryId: string;
    private _results: InlineQueryResult[];
    private _cacheTime: number | null;
    private _isPersonal: boolean | null;
    private _nextOffset: string | null;
    private _switchPmText: string | null;
    private _switchPmParameter: string | null;

    constructor(params: {
        inlineQueryId: string;
        results: InlineQueryResult[];
        cacheTime?: number | null;
        isPersonal?: boolean | null;
        nextOffset?: string | null;
        switchPmText?: string | null;
        switchPmParameter?: string | null;
    }) {
        this._inlineQueryId = params.inlineQueryId;
        this._results = params.results;
        if (typeof params.cacheTime === 'undefined' || params.cacheTime === null) {
            this._cacheTime = null;
        } else {
            this._cacheTime = params.cacheTime;
        }
        if (typeof params.isPersonal === 'undefined' || params.isPersonal === null) {
            this._isPersonal = null;
        } else {
            this._isPersonal = params.isPersonal;
        }
        if (typeof params.nextOffset === 'undefined' || params.nextOffset === null) {
            this._nextOffset = null;
        } else {
            this._nextOffset = params.nextOffset;
        }
        if (typeof params.switchPmText === 'undefined' || params.switchPmText === null) {
            this._switchPmText = null;
        } else {
            this._switchPmText = params.switchPmText;
        }
        if (typeof params.switchPmParameter === 'undefined' || params.switchPmParameter === null) {
            this._switchPmParameter = null;
        } else {
            this._switchPmParameter = params.switchPmParameter;
        }
    }

    get inlineQueryId(): string {
        return this._inlineQueryId;
    }
    get results(): InlineQueryResult[] {
        return this._results;
    }
    get cacheTime(): number | null {
        return this._cacheTime;
    }
    get isPersonal(): boolean | null {
        return this._isPersonal;
    }
    get nextOffset(): string | null {
        return this._nextOffset;
    }
    get switchPmText(): string | null {
        return this._switchPmText;
    }
    get switchPmParameter(): string | null {
        return this._switchPmParameter;
    }
}

export default AnswerInlineQueryParam;