class ExportChatInviteLinkParam {
    private _chatId: number | string;

    constructor(params: {
        chatId: number | string;
    }) {
        this._chatId = params.chatId;
    }

    get chatId(): number | string {
        return this._chatId;
    }
}

export default ExportChatInviteLinkParam;