class SetChatDescriptionParam {
    private _chatId: number | string;
    private _description: string | null;

    constructor(params: {
        chatId: number | string;
        description?: string | null;
    }) {
        this._chatId = params.chatId;
        if (typeof params.description === 'undefined' || params.description === null) {
            this._description = null;
        } else {
            this._description = params.description;
        }
    }

    get chatId(): number | string {
        return this._chatId;
    }
    get description(): string | null {
        return this._description;
    }
}

export default SetChatDescriptionParam;