class SetChatStickerSetParam {
    private _chatId: number | string;
    private _stickerSetName: string;

    constructor(params: {
        chatId: number | string;
        stickerSetName: string;
    }) {
        this._chatId = params.chatId;
        this._stickerSetName = params.stickerSetName;
    }

    get chatId(): number | string {
        return this._chatId;
    }
    get stickerSetName(): string {
        return this._stickerSetName;
    }
}

export default SetChatStickerSetParam;