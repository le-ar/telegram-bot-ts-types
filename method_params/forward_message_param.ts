class ForwardMessageParam {
    private _chatId: number | string;
    private _fromChatId: number | string;
    private _disableNotification: boolean | null;
    private _messageId: number;

    constructor(params: {
        chatId: number | string;
        fromChatId: number | string;
        disableNotification?: boolean | null;
        messageId: number;
    }) {
        this._chatId = params.chatId;
        this._fromChatId = params.fromChatId;
        if (typeof params.disableNotification === 'undefined' || params.disableNotification === null) {
            this._disableNotification = null;
        } else {
            this._disableNotification = params.disableNotification;
        }
        this._messageId = params.messageId;
    }

    get chatId(): number | string {
        return this._chatId;
    }
    get fromChatId(): number | string {
        return this._fromChatId;
    }
    get disableNotification(): boolean | null {
        return this._disableNotification;
    }
    get messageId(): number {
        return this._messageId;
    }
}

export default ForwardMessageParam;