class ChatPermissions {
    private _canSendMessages: boolean | null;
    private _canSendMediaMessages: boolean | null;
    private _canSendPolls: boolean | null;
    private _canSendOtherMessages: boolean | null;
    private _canAddWebPagePreviews: boolean | null;
    private _canChangeInfo: boolean | null;
    private _canInviteUsers: boolean | null;
    private _canPinMessages: boolean | null;

    constructor(params: {
        canSendMessages?: boolean | null;
        canSendMediaMessages?: boolean | null;
        canSendPolls?: boolean | null;
        canSendOtherMessages?: boolean | null;
        canAddWebPagePreviews?: boolean | null;
        canChangeInfo?: boolean | null;
        canInviteUsers?: boolean | null;
        canPinMessages?: boolean | null;
    }) {
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
    get canChangeInfo(): boolean | null {
        return this._canChangeInfo;
    }
    get canInviteUsers(): boolean | null {
        return this._canInviteUsers;
    }
    get canPinMessages(): boolean | null {
        return this._canPinMessages;
    }
}

export default ChatPermissions;