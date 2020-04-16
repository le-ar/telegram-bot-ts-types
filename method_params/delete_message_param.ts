class DeleteMessageParam {
    private _chatId: number | string;
    private _messageId: number;

    constructor(params: {
        chatId: number | string;
        messageId: number;
    }) {
        this._chatId = params.chatId;
        this._messageId = params.messageId;
    }

    get chatId(): number | string {
        return this._chatId;
    }
    get messageId(): number {
        return this._messageId;
    }
}

export default DeleteMessageParam;