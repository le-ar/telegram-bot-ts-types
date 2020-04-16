class SetGameScoreParam {
    private _userId: number;
    private _score: number;
    private _force: boolean | null;
    private _disableEditMessage: boolean | null;
    private _chatId: number | null;
    private _messageId: number | null;
    private _inlineMessageId: string | null;

    constructor(params: {
        userId: number;
        score: number;
        force?: boolean | null;
        disableEditMessage?: boolean | null;
        chatId?: number | null;
        messageId?: number | null;
        inlineMessageId?: string | null;
    }) {
        this._userId = params.userId;
        this._score = params.score;
        if (typeof params.force === 'undefined' || params.force === null) {
            this._force = null;
        } else {
            this._force = params.force;
        }
        if (typeof params.disableEditMessage === 'undefined' || params.disableEditMessage === null) {
            this._disableEditMessage = null;
        } else {
            this._disableEditMessage = params.disableEditMessage;
        }
        if (typeof params.chatId === 'undefined' || params.chatId === null) {
            this._chatId = null;
        } else {
            this._chatId = params.chatId;
        }
        if (typeof params.messageId === 'undefined' || params.messageId === null) {
            this._messageId = null;
        } else {
            this._messageId = params.messageId;
        }
        if (typeof params.inlineMessageId === 'undefined' || params.inlineMessageId === null) {
            this._inlineMessageId = null;
        } else {
            this._inlineMessageId = params.inlineMessageId;
        }
    }

    get userId(): number {
        return this._userId;
    }
    get score(): number {
        return this._score;
    }
    get force(): boolean | null {
        return this._force;
    }
    get disableEditMessage(): boolean | null {
        return this._disableEditMessage;
    }
    get chatId(): number | null {
        return this._chatId;
    }
    get messageId(): number | null {
        return this._messageId;
    }
    get inlineMessageId(): string | null {
        return this._inlineMessageId;
    }
}

export default SetGameScoreParam;