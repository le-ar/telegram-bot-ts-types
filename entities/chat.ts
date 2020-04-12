import ChatPhoto from './chat_photo';
import Message from './message';
import ChatPermissions from './chat_permissions';

class Chat {
    private _id: number;
    private _type: string;
    private _title: string | null;
    private _username: string | null;
    private _firstName: string | null;
    private _lastName: string | null;
    private _photo: ChatPhoto | null;
    private _description: string | null;
    private _inviteLink: string | null;
    private _pinnedMessage: Message | null;
    private _permissions: ChatPermissions | null;
    private _slowModeDelay: number | null;
    private _stickerSetName: string | null;
    private _canSetStickerSet: boolean | null;

    constructor(params: {
        id: number;
        type: string;
        title?: string | null;
        username?: string | null;
        firstName?: string | null;
        lastName?: string | null;
        photo?: ChatPhoto | null;
        description?: string | null;
        inviteLink?: string | null;
        pinnedMessage?: Message | null;
        permissions?: ChatPermissions | null;
        slowModeDelay?: number | null;
        stickerSetName?: string | null;
        canSetStickerSet?: boolean | null;
    }) {
        this._id = params.id;
        this._type = params.type;
        if (typeof params.title === 'undefined' || params.title === null) {
            this._title = null;
        } else {
            this._title = params.title;
        }
        if (typeof params.username === 'undefined' || params.username === null) {
            this._username = null;
        } else {
            this._username = params.username;
        }
        if (typeof params.firstName === 'undefined' || params.firstName === null) {
            this._firstName = null;
        } else {
            this._firstName = params.firstName;
        }
        if (typeof params.lastName === 'undefined' || params.lastName === null) {
            this._lastName = null;
        } else {
            this._lastName = params.lastName;
        }
        if (typeof params.photo === 'undefined' || params.photo === null) {
            this._photo = null;
        } else {
            this._photo = params.photo;
        }
        if (typeof params.description === 'undefined' || params.description === null) {
            this._description = null;
        } else {
            this._description = params.description;
        }
        if (typeof params.inviteLink === 'undefined' || params.inviteLink === null) {
            this._inviteLink = null;
        } else {
            this._inviteLink = params.inviteLink;
        }
        if (typeof params.pinnedMessage === 'undefined' || params.pinnedMessage === null) {
            this._pinnedMessage = null;
        } else {
            this._pinnedMessage = params.pinnedMessage;
        }
        if (typeof params.permissions === 'undefined' || params.permissions === null) {
            this._permissions = null;
        } else {
            this._permissions = params.permissions;
        }
        if (typeof params.slowModeDelay === 'undefined' || params.slowModeDelay === null) {
            this._slowModeDelay = null;
        } else {
            this._slowModeDelay = params.slowModeDelay;
        }
        if (typeof params.stickerSetName === 'undefined' || params.stickerSetName === null) {
            this._stickerSetName = null;
        } else {
            this._stickerSetName = params.stickerSetName;
        }
        if (typeof params.canSetStickerSet === 'undefined' || params.canSetStickerSet === null) {
            this._canSetStickerSet = null;
        } else {
            this._canSetStickerSet = params.canSetStickerSet;
        }
    }

    get id(): number {
        return this._id;
    }
    get type(): string {
        return this._type;
    }
    get title(): string | null {
        return this._title;
    }
    get username(): string | null {
        return this._username;
    }
    get firstName(): string | null {
        return this._firstName;
    }
    get lastName(): string | null {
        return this._lastName;
    }
    get photo(): ChatPhoto | null {
        return this._photo;
    }
    get description(): string | null {
        return this._description;
    }
    get inviteLink(): string | null {
        return this._inviteLink;
    }
    get pinnedMessage(): Message | null {
        return this._pinnedMessage;
    }
    get permissions(): ChatPermissions | null {
        return this._permissions;
    }
    get slowModeDelay(): number | null {
        return this._slowModeDelay;
    }
    get stickerSetName(): string | null {
        return this._stickerSetName;
    }
    get canSetStickerSet(): boolean | null {
        return this._canSetStickerSet;
    }
}

export default Chat;