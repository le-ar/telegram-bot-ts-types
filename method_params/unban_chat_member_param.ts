class UnbanChatMemberParam {
    private _chatId: number | string;
    private _userId: number;

    constructor(params: {
        chatId: number | string;
        userId: number;
    }) {
        this._chatId = params.chatId;
        this._userId = params.userId;
    }

    get chatId(): number | string {
        return this._chatId;
    }
    get userId(): number {
        return this._userId;
    }
}

export default UnbanChatMemberParam;