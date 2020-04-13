class User {
    private _id: number;
    private _isBot: boolean;
    private _firstName: string;
    private _lastName: string | null;
    private _username: string | null;
    private _languageCode: string | null;
    private _canJoinGroups: boolean | null;
    private _canReadAllGroupMessages: boolean | null;
    private _supportsInlineQueries: boolean | null;

    constructor(params: {
        id: number;
        isBot: boolean;
        firstName: string;
        lastName?: string | null;
        username?: string | null;
        languageCode?: string | null;
        canJoinGroups?: boolean | null;
        canReadAllGroupMessages?: boolean | null;
        supportsInlineQueries?: boolean | null;
    }) {
        this._id = params.id;
        this._isBot = params.isBot;
        this._firstName = params.firstName;
        if (typeof params.lastName === 'undefined' || params.lastName === null) {
            this._lastName = null;
        } else {
            this._lastName = params.lastName;
        }
        if (typeof params.username === 'undefined' || params.username === null) {
            this._username = null;
        } else {
            this._username = params.username;
        }
        if (typeof params.languageCode === 'undefined' || params.languageCode === null) {
            this._languageCode = null;
        } else {
            this._languageCode = params.languageCode;
        }
        if (typeof params.canJoinGroups === 'undefined' || params.canJoinGroups === null) {
            this._canJoinGroups = null;
        } else {
            this._canJoinGroups = params.canJoinGroups;
        }
        if (typeof params.canReadAllGroupMessages === 'undefined' || params.canReadAllGroupMessages === null) {
            this._canReadAllGroupMessages = null;
        } else {
            this._canReadAllGroupMessages = params.canReadAllGroupMessages;
        }
        if (typeof params.supportsInlineQueries === 'undefined' || params.supportsInlineQueries === null) {
            this._supportsInlineQueries = null;
        } else {
            this._supportsInlineQueries = params.supportsInlineQueries;
        }
    }

    get id(): number {
        return this._id;
    }
    get isBot(): boolean {
        return this._isBot;
    }
    get firstName(): string {
        return this._firstName;
    }
    get lastName(): string | null {
        return this._lastName;
    }
    get username(): string | null {
        return this._username;
    }
    get languageCode(): string | null {
        return this._languageCode;
    }
    get canJoinGroups(): boolean | null {
        return this._canJoinGroups;
    }
    get canReadAllGroupMessages(): boolean | null {
        return this._canReadAllGroupMessages;
    }
    get supportsInlineQueries(): boolean | null {
        return this._supportsInlineQueries;
    }
}

export default User;