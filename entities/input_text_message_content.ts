class InputTextMessageContent {
    private _messageText: string;
    private _parseMode: string | null;
    private _disableWebPagePreview: boolean | null;

    constructor(params: {
        messageText: string;
        parseMode?: string | null;
        disableWebPagePreview?: boolean | null;
    }) {
        this._messageText = params.messageText;
        if (typeof params.parseMode === 'undefined' || params.parseMode === null) {
            this._parseMode = null;
        } else {
            this._parseMode = params.parseMode;
        }
        if (typeof params.disableWebPagePreview === 'undefined' || params.disableWebPagePreview === null) {
            this._disableWebPagePreview = null;
        } else {
            this._disableWebPagePreview = params.disableWebPagePreview;
        }
    }

    get messageText(): string {
        return this._messageText;
    }
    get parseMode(): string | null {
        return this._parseMode;
    }
    get disableWebPagePreview(): boolean | null {
        return this._disableWebPagePreview;
    }
}

export default InputTextMessageContent;