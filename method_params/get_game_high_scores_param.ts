class GetGameHighScoresParam {
    private _userId: number;
    private _chatId: number | null;
    private _messageId: number | null;
    private _inlineMessageId: string | null;

    constructor(params: {
        userId: number;
        chatId?: number | null;
        messageId?: number | null;
        inlineMessageId?: string | null;
    }) {
        this._userId = params.userId;
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

export default GetGameHighScoresParam;