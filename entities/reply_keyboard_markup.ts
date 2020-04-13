import KeyboardButton from './keyboard_button';

class ReplyKeyboardMarkup {
    private _keyboard: KeyboardButton[][];
    private _resizeKeyboard: boolean | null;
    private _oneTimeKeyboard: boolean | null;
    private _selective: boolean | null;

    constructor(params: {
        keyboard: KeyboardButton[][];
        resizeKeyboard?: boolean | null;
        oneTimeKeyboard?: boolean | null;
        selective?: boolean | null;
    }) {
        this._keyboard = params.keyboard;
        if (typeof params.resizeKeyboard === 'undefined' || params.resizeKeyboard === null) {
            this._resizeKeyboard = null;
        } else {
            this._resizeKeyboard = params.resizeKeyboard;
        }
        if (typeof params.oneTimeKeyboard === 'undefined' || params.oneTimeKeyboard === null) {
            this._oneTimeKeyboard = null;
        } else {
            this._oneTimeKeyboard = params.oneTimeKeyboard;
        }
        if (typeof params.selective === 'undefined' || params.selective === null) {
            this._selective = null;
        } else {
            this._selective = params.selective;
        }
    }

    get keyboard(): KeyboardButton[][] {
        return this._keyboard;
    }
    get resizeKeyboard(): boolean | null {
        return this._resizeKeyboard;
    }
    get oneTimeKeyboard(): boolean | null {
        return this._oneTimeKeyboard;
    }
    get selective(): boolean | null {
        return this._selective;
    }
}

export default ReplyKeyboardMarkup;