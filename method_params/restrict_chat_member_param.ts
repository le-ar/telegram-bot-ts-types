import ChatPermissions from '../entities/chat_permissions';

class RestrictChatMemberParam {
    private _chatId: number | string;
    private _userId: number;
    private _permissions: ChatPermissions;
    private _untilDate: number | null;

    constructor(params: {
        chatId: number | string;
        userId: number;
        permissions: ChatPermissions;
        untilDate?: number | null;
    }) {
        this._chatId = params.chatId;
        this._userId = params.userId;
        this._permissions = params.permissions;
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
    get permissions(): ChatPermissions {
        return this._permissions;
    }
    get untilDate(): number | null {
        return this._untilDate;
    }
}

export default RestrictChatMemberParam;