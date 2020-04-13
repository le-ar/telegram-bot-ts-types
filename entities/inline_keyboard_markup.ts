import InlineKeyboardButton from './inline_keyboard_button';

class InlineKeyboardMarkup {
    private _inlineKeyboard: InlineKeyboardButton[][];

    constructor(params: {
        inlineKeyboard: InlineKeyboardButton[][];
    }) {
        this._inlineKeyboard = params.inlineKeyboard;
    }

    get inlineKeyboard(): InlineKeyboardButton[][] {
        return this._inlineKeyboard;
    }
}

export default InlineKeyboardMarkup;