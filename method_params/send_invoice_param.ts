import LabeledPrice from '../entities/labeled_price';
import InlineKeyboardMarkup from '../entities/inline_keyboard_markup';

class SendInvoiceParam {
    private _chatId: number;
    private _title: string;
    private _description: string;
    private _payload: string;
    private _providerToken: string;
    private _startParameter: string;
    private _currency: string;
    private _prices: LabeledPrice[];
    private _providerData: string | null;
    private _photoUrl: string | null;
    private _photoSize: number | null;
    private _photoWidth: number | null;
    private _photoHeight: number | null;
    private _needName: boolean | null;
    private _needPhoneNumber: boolean | null;
    private _needEmail: boolean | null;
    private _needShippingAddress: boolean | null;
    private _sendPhoneNumberToProvider: boolean | null;
    private _sendEmailToProvider: boolean | null;
    private _isFlexible: boolean | null;
    private _disableNotification: boolean | null;
    private _replyToMessageId: number | null;
    private _replyMarkup: InlineKeyboardMarkup | null;

    constructor(params: {
        chatId: number;
        title: string;
        description: string;
        payload: string;
        providerToken: string;
        startParameter: string;
        currency: string;
        prices: LabeledPrice[];
        providerData?: string | null;
        photoUrl?: string | null;
        photoSize?: number | null;
        photoWidth?: number | null;
        photoHeight?: number | null;
        needName?: boolean | null;
        needPhoneNumber?: boolean | null;
        needEmail?: boolean | null;
        needShippingAddress?: boolean | null;
        sendPhoneNumberToProvider?: boolean | null;
        sendEmailToProvider?: boolean | null;
        isFlexible?: boolean | null;
        disableNotification?: boolean | null;
        replyToMessageId?: number | null;
        replyMarkup?: InlineKeyboardMarkup | null;
    }) {
        this._chatId = params.chatId;
        this._title = params.title;
        this._description = params.description;
        this._payload = params.payload;
        this._providerToken = params.providerToken;
        this._startParameter = params.startParameter;
        this._currency = params.currency;
        this._prices = params.prices;
        if (typeof params.providerData === 'undefined' || params.providerData === null) {
            this._providerData = null;
        } else {
            this._providerData = params.providerData;
        }
        if (typeof params.photoUrl === 'undefined' || params.photoUrl === null) {
            this._photoUrl = null;
        } else {
            this._photoUrl = params.photoUrl;
        }
        if (typeof params.photoSize === 'undefined' || params.photoSize === null) {
            this._photoSize = null;
        } else {
            this._photoSize = params.photoSize;
        }
        if (typeof params.photoWidth === 'undefined' || params.photoWidth === null) {
            this._photoWidth = null;
        } else {
            this._photoWidth = params.photoWidth;
        }
        if (typeof params.photoHeight === 'undefined' || params.photoHeight === null) {
            this._photoHeight = null;
        } else {
            this._photoHeight = params.photoHeight;
        }
        if (typeof params.needName === 'undefined' || params.needName === null) {
            this._needName = null;
        } else {
            this._needName = params.needName;
        }
        if (typeof params.needPhoneNumber === 'undefined' || params.needPhoneNumber === null) {
            this._needPhoneNumber = null;
        } else {
            this._needPhoneNumber = params.needPhoneNumber;
        }
        if (typeof params.needEmail === 'undefined' || params.needEmail === null) {
            this._needEmail = null;
        } else {
            this._needEmail = params.needEmail;
        }
        if (typeof params.needShippingAddress === 'undefined' || params.needShippingAddress === null) {
            this._needShippingAddress = null;
        } else {
            this._needShippingAddress = params.needShippingAddress;
        }
        if (typeof params.sendPhoneNumberToProvider === 'undefined' || params.sendPhoneNumberToProvider === null) {
            this._sendPhoneNumberToProvider = null;
        } else {
            this._sendPhoneNumberToProvider = params.sendPhoneNumberToProvider;
        }
        if (typeof params.sendEmailToProvider === 'undefined' || params.sendEmailToProvider === null) {
            this._sendEmailToProvider = null;
        } else {
            this._sendEmailToProvider = params.sendEmailToProvider;
        }
        if (typeof params.isFlexible === 'undefined' || params.isFlexible === null) {
            this._isFlexible = null;
        } else {
            this._isFlexible = params.isFlexible;
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

    get chatId(): number {
        return this._chatId;
    }
    get title(): string {
        return this._title;
    }
    get description(): string {
        return this._description;
    }
    get payload(): string {
        return this._payload;
    }
    get providerToken(): string {
        return this._providerToken;
    }
    get startParameter(): string {
        return this._startParameter;
    }
    get currency(): string {
        return this._currency;
    }
    get prices(): LabeledPrice[] {
        return this._prices;
    }
    get providerData(): string | null {
        return this._providerData;
    }
    get photoUrl(): string | null {
        return this._photoUrl;
    }
    get photoSize(): number | null {
        return this._photoSize;
    }
    get photoWidth(): number | null {
        return this._photoWidth;
    }
    get photoHeight(): number | null {
        return this._photoHeight;
    }
    get needName(): boolean | null {
        return this._needName;
    }
    get needPhoneNumber(): boolean | null {
        return this._needPhoneNumber;
    }
    get needEmail(): boolean | null {
        return this._needEmail;
    }
    get needShippingAddress(): boolean | null {
        return this._needShippingAddress;
    }
    get sendPhoneNumberToProvider(): boolean | null {
        return this._sendPhoneNumberToProvider;
    }
    get sendEmailToProvider(): boolean | null {
        return this._sendEmailToProvider;
    }
    get isFlexible(): boolean | null {
        return this._isFlexible;
    }
    get disableNotification(): boolean | null {
        return this._disableNotification;
    }
    get replyToMessageId(): number | null {
        return this._replyToMessageId;
    }
    get replyMarkup(): InlineKeyboardMarkup | null {
        return this._replyMarkup;
    }
}

export default SendInvoiceParam;