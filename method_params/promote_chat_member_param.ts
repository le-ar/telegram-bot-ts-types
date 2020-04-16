class PromoteChatMemberParam {
    private _chatId: number | string;
    private _userId: number;
    private _canChangeInfo: boolean | null;
    private _canPostMessages: boolean | null;
    private _canEditMessages: boolean | null;
    private _canDeleteMessages: boolean | null;
    private _canInviteUsers: boolean | null;
    private _canRestrictMembers: boolean | null;
    private _canPinMessages: boolean | null;
    private _canPromoteMembers: boolean | null;

    constructor(params: {
        chatId: number | string;
        userId: number;
        canChangeInfo?: boolean | null;
        canPostMessages?: boolean | null;
        canEditMessages?: boolean | null;
        canDeleteMessages?: boolean | null;
        canInviteUsers?: boolean | null;
        canRestrictMembers?: boolean | null;
        canPinMessages?: boolean | null;
        canPromoteMembers?: boolean | null;
    }) {
        this._chatId = params.chatId;
        this._userId = params.userId;
        if (typeof params.canChangeInfo === 'undefined' || params.canChangeInfo === null) {
            this._canChangeInfo = null;
        } else {
            this._canChangeInfo = params.canChangeInfo;
        }
        if (typeof params.canPostMessages === 'undefined' || params.canPostMessages === null) {
            this._canPostMessages = null;
        } else {
            this._canPostMessages = params.canPostMessages;
        }
        if (typeof params.canEditMessages === 'undefined' || params.canEditMessages === null) {
            this._canEditMessages = null;
        } else {
            this._canEditMessages = params.canEditMessages;
        }
        if (typeof params.canDeleteMessages === 'undefined' || params.canDeleteMessages === null) {
            this._canDeleteMessages = null;
        } else {
            this._canDeleteMessages = params.canDeleteMessages;
        }
        if (typeof params.canInviteUsers === 'undefined' || params.canInviteUsers === null) {
            this._canInviteUsers = null;
        } else {
            this._canInviteUsers = params.canInviteUsers;
        }
        if (typeof params.canRestrictMembers === 'undefined' || params.canRestrictMembers === null) {
            this._canRestrictMembers = null;
        } else {
            this._canRestrictMembers = params.canRestrictMembers;
        }
        if (typeof params.canPinMessages === 'undefined' || params.canPinMessages === null) {
            this._canPinMessages = null;
        } else {
            this._canPinMessages = params.canPinMessages;
        }
        if (typeof params.canPromoteMembers === 'undefined' || params.canPromoteMembers === null) {
            this._canPromoteMembers = null;
        } else {
            this._canPromoteMembers = params.canPromoteMembers;
        }
    }

    get chatId(): number | string {
        return this._chatId;
    }
    get userId(): number {
        return this._userId;
    }
    get canChangeInfo(): boolean | null {
        return this._canChangeInfo;
    }
    get canPostMessages(): boolean | null {
        return this._canPostMessages;
    }
    get canEditMessages(): boolean | null {
        return this._canEditMessages;
    }
    get canDeleteMessages(): boolean | null {
        return this._canDeleteMessages;
    }
    get canInviteUsers(): boolean | null {
        return this._canInviteUsers;
    }
    get canRestrictMembers(): boolean | null {
        return this._canRestrictMembers;
    }
    get canPinMessages(): boolean | null {
        return this._canPinMessages;
    }
    get canPromoteMembers(): boolean | null {
        return this._canPromoteMembers;
    }
}

export default PromoteChatMemberParam;