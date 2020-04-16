class KickChatMemberParam {
    private _chatId: number | string;
    private _userId: number;
    private _untilDate: number | null;

    constructor(params: {
        chatId: number | string;
        userId: number;
        untilDate?: number | null;
    }) {
        this._chatId = params.chatId;
        this._userId = params.userId;
        if (typeof params.untilDate === 'undefined' || params.untilDate === null) {
            this._untilDate = null;
        } else {
            this._untilDate = params.untilDate;
        }
    }

    get chatId(): number | string {
        return this._chatId;
    }
    get userId(): number {
        return this._userId;
    }
    get untilDate(): number | null {
        return this._untilDate;
    }
}

export default KickChatMemberParam;