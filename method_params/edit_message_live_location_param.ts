import InlineKeyboardMarkup from '../entities/inline_keyboard_markup';

class EditMessageLiveLocationParam {
    private _chatId: number | string | null;
    private _messageId: number | null;
    private _inlineMessageId: string | null;
    private _latitude: number;
    private _longitude: number;
    private _replyMarkup: InlineKeyboardMarkup | null;

    constructor(params: {
        chatId?: number | string | null;
        messageId?: number | null;
        inlineMessageId?: string | null;
        latitude: number;
        longitude: number;
        replyMarkup?: InlineKeyboardMarkup | null;
    }) {
        if (typeof params.chatId === 'undefined' || params.chatId === null) {
            this._chatId = null;
        } else {
            this._chatId = params.chatId;
        }
        if (typeof params.messageId === 'undefined' || params.messageId === null) {
            this._messageId = null;
        } else {
            this._messageId = params.messageId;
        }
        if (typeof params.inlineMessageId === 'undefined' || params.inlineMessageId === null) {
            this._inlineMessageId = null;
        } else {
            this._inlineMessageId = params.inlineMessageId;
        }
        this._latitude = params.latitude;
        this._longitude = params.longitude;
        if (typeof params.replyMarkup === 'undefined' || params.replyMarkup === null) {
            this._replyMarkup = null;
        } else {
            this._replyMarkup = params.replyMarkup;
        }
    }

    get chatId(): number | string | null {
        return this._chatId;
    }
    get messageId(): number | null {
        return this._messageId;
    }
    get inlineMessageId(): string | null {
        return this._inlineMessageId;
    }
    get latitude(): number {
        return this._latitude;
    }
    get longitude(): number {
        return this._longitude;
    }
    get replyMarkup(): InlineKeyboardMarkup | null {
        return this._replyMarkup;
    }
}

export default EditMessageLiveLocationParam;