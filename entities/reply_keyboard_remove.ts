class ReplyKeyboardRemove {
    private _removeKeyboard: true;
    private _selective: boolean | null;

    constructor(params: {
        selective?: boolean | null;
    }) {
        this._removeKeyboard = true;
        if (typeof params.selective === 'undefined' || params.selective === null) {
            this._selective = null;
        } else {
            this._selective = params.selective;
        }
    }

    get removeKeyboard(): true {
        return this._removeKeyboard;
    }
    get selective(): boolean | null {
        return this._selective;
    }
}

export default ReplyKeyboardRemove;