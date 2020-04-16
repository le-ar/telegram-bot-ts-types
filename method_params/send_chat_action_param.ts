class SendChatActionParam {
    private _chatId: number | string;
    private _action: string;

    constructor(params: {
        chatId: number | string;
        action: string;
    }) {
        this._chatId = params.chatId;
        this._action = params.action;
    }

    get chatId(): number | string {
        return this._chatId;
    }
    get action(): string {
        return this._action;
    }
}

export default SendChatActionParam;