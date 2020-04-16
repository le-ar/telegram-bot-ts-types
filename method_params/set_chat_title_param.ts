class SetChatTitleParam {
    private _chatId: number | string;
    private _title: string;

    constructor(params: {
        chatId: number | string;
        title: string;
    }) {
        this._chatId = params.chatId;
        this._title = params.title;
    }

    get chatId(): number | string {
        return this._chatId;
    }
    get title(): string {
        return this._title;
    }
}

export default SetChatTitleParam;