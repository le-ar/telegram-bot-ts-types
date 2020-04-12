import User from './user';
import Message from './message';

class CallbackQuery {
    private _id: string;
    private _from: User;
    private _message: Message | null;
    private _inlineMessageId: string | null;
    private _chatInstance: string;
    private _data: string | null;
    private _gameShortName: string | null;

    constructor(params: {
        id: string;
        from: User;
        message?: Message | null;
        inlineMessageId?: string | null;
        chatInstance: string;
        data?: string | null;
        gameShortName?: string | null;
    }) {
        this._id = params.id;
        this._from = params.from;
        if (typeof params.message === 'undefined' || params.message === null) {
            this._message = null;
        } else {
            this._message = params.message;
        }
        if (typeof params.inlineMessageId === 'undefined' || params.inlineMessageId === null) {
            this._inlineMessageId = null;
        } else {
            this._inlineMessageId = params.inlineMessageId;
        }
        this._chatInstance = params.chatInstance;
        if (typeof params.data === 'undefined' || params.data === null) {
            this._data = null;
        } else {
            this._data = params.data;
        }
        if (typeof params.gameShortName === 'undefined' || params.gameShortName === null) {
            this._gameShortName = null;
        } else {
            this._gameShortName = params.gameShortName;
        }
    }

    get id(): string {
        return this._id;
    }
    get from(): User {
        return this._from;
    }
    get message(): Message | null {
        return this._message;
    }
    get inlineMessageId(): string | null {
        return this._inlineMessageId;
    }
    get chatInstance(): string {
        return this._chatInstance;
    }
    get data(): string | null {
        return this._data;
    }
    get gameShortName(): string | null {
        return this._gameShortName;
    }
}

export default CallbackQuery;