import InlineQueryResult from './inline_query_result';
import InlineKeyboardMarkup from './inline_keyboard_markup';
import InputMessageContent from './input_message_content';

class InlineQueryResultContact extends InlineQueryResult {
    private _type: string;
    private _id: string;
    private _phoneNumber: string;
    private _firstName: string;
    private _lastName: string | null;
    private _vcard: string | null;
    private _replyMarkup: InlineKeyboardMarkup | null;
    private _inputMessageContent: InputMessageContent | null;
    private _thumbUrl: string | null;
    private _thumbWidth: number | null;
    private _thumbHeight: number | null;

    constructor(params: {
        type: string;
        id: string;
        phoneNumber: string;
        firstName: string;
        lastName?: string | null;
        vcard?: string | null;
        replyMarkup?: InlineKeyboardMarkup | null;
        inputMessageContent?: InputMessageContent | null;
        thumbUrl?: string | null;
        thumbWidth?: number | null;
        thumbHeight?: number | null;
    }) {
        super();
        this._type = params.type;
        this._id = params.id;
        this._phoneNumber = params.phoneNumber;
        this._firstName = params.firstName;
        if (typeof params.lastName === 'undefined' || params.lastName === null) {
            this._lastName = null;
        } else {
            this._lastName = params.lastName;
        }
        if (typeof params.vcard === 'undefined' || params.vcard === null) {
            this._vcard = null;
        } else {
            this._vcard = params.vcard;
        }
        if (typeof params.replyMarkup === 'undefined' || params.replyMarkup === null) {
            this._replyMarkup = null;
        } else {
            this._replyMarkup = params.replyMarkup;
        }
        if (typeof params.inputMessageContent === 'undefined' || params.inputMessageContent === null) {
            this._inputMessageContent = null;
        } else {
            this._inputMessageContent = params.inputMessageContent;
        }
        if (typeof params.thumbUrl === 'undefined' || params.thumbUrl === null) {
            this._thumbUrl = null;
        } else {
            this._thumbUrl = params.thumbUrl;
        }
        if (typeof params.thumbWidth === 'undefined' || params.thumbWidth === null) {
            this._thumbWidth = null;
        } else {
            this._thumbWidth = params.thumbWidth;
        }
        if (typeof params.thumbHeight === 'undefined' || params.thumbHeight === null) {
            this._thumbHeight = null;
        } else {
            this._thumbHeight = params.thumbHeight;
        }
    }

    get type(): string {
        return this._type;
    }
    get id(): string {
        return this._id;
    }
    get phoneNumber(): string {
        return this._phoneNumber;
    }
    get firstName(): string {
        return this._firstName;
    }
    get lastName(): string | null {
        return this._lastName;
    }
    get vcard(): string | null {
        return this._vcard;
    }
    get replyMarkup(): InlineKeyboardMarkup | null {
        return this._replyMarkup;
    }
    get inputMessageContent(): InputMessageContent | null {
        return this._inputMessageContent;
    }
    get thumbUrl(): string | null {
        return this._thumbUrl;
    }
    get thumbWidth(): number | null {
        return this._thumbWidth;
    }
    get thumbHeight(): number | null {
        return this._thumbHeight;
    }
}

export default InlineQueryResultContact;