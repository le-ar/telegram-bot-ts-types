import InlineKeyboardMarkup from '../entities/inline_keyboard_markup';
import ReplyKeyboardMarkup from '../entities/reply_keyboard_markup';
import ReplyKeyboardRemove from '../entities/reply_keyboard_remove';
import ForceReply from '../entities/force_reply';

class SendVenueParam {
    private _chatId: number | string;
    private _latitude: number;
    private _longitude: number;
    private _title: string;
    private _address: string;
    private _foursquareId: string | null;
    private _foursquareType: string | null;
    private _disableNotification: boolean | null;
    private _replyToMessageId: number | null;
    private _replyMarkup: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply | null;

    constructor(params: {
        chatId: number | string;
        latitude: number;
        longitude: number;
        title: string;
        address: string;
        foursquareId?: string | null;
        foursquareType?: string | null;
        disableNotification?: boolean | null;
        replyToMessageId?: number | null;
        replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply | null;
    }) {
        this._chatId = params.chatId;
        this._latitude = params.latitude;
        this._longitude = params.longitude;
        this._title = params.title;
        this._address = params.address;
        if (typeof params.foursquareId === 'undefined' || params.foursquareId === null) {
            this._foursquareId = null;
        } else {
            this._foursquareId = params.foursquareId;
        }
        if (typeof params.foursquareType === 'undefined' || params.foursquareType === null) {
            this._foursquareType = null;
        } else {
            this._foursquareType = params.foursquareType;
        }
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
        if (typeof params.replyMarkup === 'undefined' || params.replyMarkup === null) {
            this._replyMarkup = null;
        } else {
            this._replyMarkup = params.replyMarkup;
        }
    }

    get chatId(): number | string {
        return this._chatId;
    }
    get latitude(): number {
        return this._latitude;
    }
    get longitude(): number {
        return this._longitude;
    }
    get title(): string {
        return this._title;
    }
    get address(): string {
        return this._address;
    }
    get foursquareId(): string | null {
        return this._foursquareId;
    }
    get foursquareType(): string | null {
        return this._foursquareType;
    }
    get disableNotification(): boolean | null {
        return this._disableNotification;
    }
    get replyToMessageId(): number | null {
        return this._replyToMessageId;
    }
    get replyMarkup(): InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply | null {
        return this._replyMarkup;
    }
}

export default SendVenueParam;