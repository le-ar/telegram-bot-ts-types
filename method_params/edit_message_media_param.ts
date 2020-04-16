import InputMedia from '../entities/input_media';
import InlineKeyboardMarkup from '../entities/inline_keyboard_markup';

class EditMessageMediaParam {
    private _chatId: number | string | null;
    private _messageId: number | null;
    private _inlineMessageId: string | null;
    private _media: InputMedia;
    private _replyMarkup: InlineKeyboardMarkup | null;

    constructor(params: {
        chatId?: number | string | null;
        messageId?: number | null;
        inlineMessageId?: string | null;
        media: InputMedia;
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
        this._media = params.media;
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
    get media(): InputMedia {
        return this._media;
    }
    get replyMarkup(): InlineKeyboardMarkup | null {
        return this._replyMarkup;
    }
}

export default EditMessageMediaParam;