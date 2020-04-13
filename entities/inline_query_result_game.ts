import InlineQueryResult from './inline_query_result';
import InlineKeyboardMarkup from './inline_keyboard_markup';

class InlineQueryResultGame extends InlineQueryResult {
    private _type: string;
    private _id: string;
    private _gameShortName: string;
    private _replyMarkup: InlineKeyboardMarkup | null;

    constructor(params: {
        type: string;
        id: string;
        gameShortName: string;
        replyMarkup?: InlineKeyboardMarkup | null;
    }) {
        super();
        this._type = params.type;
        this._id = params.id;
        this._gameShortName = params.gameShortName;
        if (typeof params.replyMarkup === 'undefined' || params.replyMarkup === null) {
            this._replyMarkup = null;
        } else {
            this._replyMarkup = params.replyMarkup;
        }
    }

    get type(): string {
        return this._type;
    }
    get id(): string {
        return this._id;
    }
    get gameShortName(): string {
        return this._gameShortName;
    }
    get replyMarkup(): InlineKeyboardMarkup | null {
        return this._replyMarkup;
    }
}

export default InlineQueryResultGame;