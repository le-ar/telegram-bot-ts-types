class SetChatAdministratorCustomTitleParam {
    private _chatId: number | string;
    private _userId: number;
    private _customTitle: string;

    constructor(params: {
        chatId: number | string;
        userId: number;
        customTitle: string;
    }) {
        this._chatId = params.chatId;
        this._userId = params.userId;
        this._customTitle = params.customTitle;
    }

    get chatId(): number | string {
        return this._chatId;
    }
    get userId(): number {
        return this._userId;
    }
    get customTitle(): string {
        return this._customTitle;
    }
}

export default SetChatAdministratorCustomTitleParam;