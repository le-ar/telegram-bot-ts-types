import User from './user';

class ChatMember {
    private _user: User;
    private _status: string;
    private _customTitle: string | null;
    private _untilDate: number | null;
    private _canBeEdited: boolean | null;
    private _canPostMessages: boolean | null;
    private _canEditMessages: boolean | null;
    private _canDeleteMessages: boolean | null;
    private _canRestrictMembers: boolean | null;
    private _canPromoteMembers: boolean | null;
    private _canChangeInfo: boolean | null;
    private _canInviteUsers: boolean | null;
    private _canPinMessages: boolean | null;
    private _isMember: boolean | null;
    private _canSendMessages: boolean | null;
    private _canSendMediaMessages: boolean | null;
    private _canSendPolls: boolean | null;
    private _canSendOtherMessages: boolean | null;
    private _canAddWebPagePreviews: boolean | null;

    constructor(params: {
        user: User;
        status: string;
        customTitle?: string | null;
        untilDate?: number | null;
        canBeEdited?: boolean | null;
        canPostMessages?: boolean | null;
        canEditMessages?: boolean | null;
        canDeleteMessages?: boolean | null;
        canRestrictMembers?: boolean | null;
        canPromoteMembers?: boolean | null;
        canChangeInfo?: boolean | null;
        canInviteUsers?: boolean | null;
        canPinMessages?: boolean | null;
        isMember?: boolean | null;
        canSendMessages?: boolean | null;
        canSendMediaMessages?: boolean | null;
        canSendPolls?: boolean | null;
        canSendOtherMessages?: boolean | null;
        canAddWebPagePreviews?: boolean | null;
    }) {
        this._user = params.user;
        this._status = params.status;
        if (typeof params.customTitle === 'undefined' || params.customTitle === null) {
            this._customTitle = null;
        } else {
            this._customTitle = params.customTitle;
        }
        if (typeof params.untilDate === 'undefined' || params.untilDate === null) {
            this._untilDate = null;
        } else {
            this._untilDate = params.untilDate;
        }
        if (typeof params.canBeEdited === 'undefined' || params.canBeEdited === null) {
            this._canBeEdited = null;
        } else {
            this._canBeEdited = params.canBeEdited;
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
        if (typeof params.canRestrictMembers === 'undefined' || params.canRestrictMembers === null) {
            this._canRestrictMembers = null;
        } else {
            this._canRestrictMembers = params.canRestrictMembers;
        }
        if (typeof params.canPromoteMembers === 'undefined' || params.canPromoteMembers === null) {
            this._canPromoteMembers = null;
        } else {
            this._canPromoteMembers = params.canPromoteMembers;
        }
        if (typeof params.canChangeInfo === 'undefined' || params.canChangeInfo === null) {
            this._canChangeInfo = null;
        } else {
            this._canChangeInfo = params.canChangeInfo;
        }
        if (typeof params.canInviteUsers === 'undefined' || params.canInviteUsers === null) {
            this._canInviteUsers = null;
        } else {
            this._canInviteUsers = params.canInviteUsers;
        }
        if (typeof params.canPinMessages === 'undefined' || params.canPinMessages === null) {
            this._canPinMessages = null;
        } else {
            this._canPinMessages = params.canPinMessages;
        }
        if (typeof params.isMember === 'undefined' || params.isMember === null) {
            this._isMember = null;
        } else {
            this._isMember = params.isMember;
        }
        if (typeof params.canSendMessages === 'undefined' || params.canSendMessages === null) {
            this._canSendMessages = null;
        } else {
            this._canSendMessages = params.canSendMessages;
        }
        if (typeof params.canSendMediaMessages === 'undefined' || params.canSendMediaMessages === null) {
            this._canSendMediaMessages = null;
        } else {
            this._canSendMediaMessages = params.canSendMediaMessages;
        }
        if (typeof params.canSendPolls === 'undefined' || params.canSendPolls === null) {
            this._canSendPolls = null;
        } else {
            this._canSendPolls = params.canSendPolls;
        }
        if (typeof params.canSendOtherMessages === 'undefined' || params.canSendOtherMessages === null) {
            this._canSendOtherMessages = null;
        } else {
            this._canSendOtherMessages = params.canSendOtherMessages;
        }
        if (typeof params.canAddWebPagePreviews === 'undefined' || params.canAddWebPagePreviews === null) {
            this._canAddWebPagePreviews = null;
        } else {
            this._canAddWebPagePreviews = params.canAddWebPagePreviews;
        }
    }

    get user(): User {
        return this._user;
    }
    get status(): string {
        return this._status;
    }
    get customTitle(): string | null {
        return this._customTitle;
    }
    get untilDate(): number | null {
        return this._untilDate;
    }
    get canBeEdited(): boolean | null {
        return this._canBeEdited;
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
    get canRestrictMembers(): boolean | null {
        return this._canRestrictMembers;
    }
    get canPromoteMembers(): boolean | null {
        return this._canPromoteMembers;
    }
    get canChangeInfo(): boolean | null {
        return this._canChangeInfo;
    }
    get canInviteUsers(): boolean | null {
        return this._canInviteUsers;
    }
    get canPinMessages(): boolean | null {
        return this._canPinMessages;
    }
    get isMember(): boolean | null {
        return this._isMember;
    }
    get canSendMessages(): boolean | null {
        return this._canSendMessages;
    }
    get canSendMediaMessages(): boolean | null {
        return this._canSendMediaMessages;
    }
    get canSendPolls(): boolean | null {
        return this._canSendPolls;
    }
    get canSendOtherMessages(): boolean | null {
        return this._canSendOtherMessages;
    }
    get canAddWebPagePreviews(): boolean | null {
        return this._canAddWebPagePreviews;
    }
}

export default ChatMember;