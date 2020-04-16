class PinChatMessageParam {
    private _chatId: number | string;
    private _messageId: number;
    private _disableNotification: boolean | null;

    constructor(params: {
        chatId: number | string;
        messageId: number;
        disableNotification?: boolean | null;
    }) {
        this._chatId = params.chatId;
        this._messageId = params.messageId;
        if (typeof params.disableNotification === 'undefined' || params.disableNotification === null) {
            this._disableNotification = null;
        } else {
            this._disableNotification = params.disableNotification;
        }
    }

    get chatId(): number | string {
        return this._chatId;
    }
    get messageId(): number {
        return this._messageId;
    }
    get disableNotification(): boolean | null {
        return this._disableNotification;
    }
}

export default PinChatMessageParam;