import ChatPermissions from '../entities/chat_permissions';

class SetChatPermissionsParam {
    private _chatId: number | string;
    private _permissions: ChatPermissions;

    constructor(params: {
        chatId: number | string;
        permissions: ChatPermissions;
    }) {
        this._chatId = params.chatId;
        this._permissions = params.permissions;
    }

    get chatId(): number | string {
        return this._chatId;
    }
    get permissions(): ChatPermissions {
        return this._permissions;
    }
}

export default SetChatPermissionsParam;