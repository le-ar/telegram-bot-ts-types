import InputMediaPhoto from '../entities/input_media_photo';
import InputMediaVideo from '../entities/input_media_video';

class SendMediaGroupParam {
    private _chatId: number | string;
    private _media: InputMediaPhoto[] | InputMediaVideo[];
    private _disableNotification: boolean | null;
    private _replyToMessageId: number | null;

    constructor(params: {
        chatId: number | string;
        media: InputMediaPhoto[] | InputMediaVideo[];
        disableNotification?: boolean | null;
        replyToMessageId?: number | null;
    }) {
        this._chatId = params.chatId;
        this._media = params.media;
        if (typeof params.disableNotification === 'undefined' || params.disableNotification === null) {
            this._disableNotification = null;
        } else {
            this._disableNotification = params.disableNotification;
        }
        if (typeof params.replyToMessageId === 'undefined' || params.replyToMessageId === null) {
            this._replyToMessageId = null;
        } else {
            this._replyToMessageId = params.replyToMessageId;
        }
    }

    get chatId(): number | string {
        return this._chatId;
    }
    get media(): InputMediaPhoto[] | InputMediaVideo[] {
        return this._media;
    }
    get disableNotification(): boolean | null {
        return this._disableNotification;
    }
    get replyToMessageId(): number | null {
        return this._replyToMessageId;
    }
}

export default SendMediaGroupParam;