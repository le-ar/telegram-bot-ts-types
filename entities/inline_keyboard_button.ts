import LoginUrl from './login_url';
import CallbackGame from './callback_game';

class InlineKeyboardButton {
    private _text: string;
    private _url: string | null;
    private _loginUrl: LoginUrl | null;
    private _callbackData: string | null;
    private _switchInlineQuery: string | null;
    private _switchInlineQueryCurrentChat: string | null;
    private _callbackGame: CallbackGame | null;
    private _pay: boolean | null;

    constructor(params: {
        text: string;
        url?: string | null;
        loginUrl?: LoginUrl | null;
        callbackData?: string | null;
        switchInlineQuery?: string | null;
        switchInlineQueryCurrentChat?: string | null;
        callbackGame?: CallbackGame | null;
        pay?: boolean | null;
    }) {
        this._text = params.text;
        if (typeof params.url === 'undefined' || params.url === null) {
            this._url = null;
        } else {
            this._url = params.url;
        }
        if (typeof params.loginUrl === 'undefined' || params.loginUrl === null) {
            this._loginUrl = null;
        } else {
            this._loginUrl = params.loginUrl;
        }
        if (typeof params.callbackData === 'undefined' || params.callbackData === null) {
            this._callbackData = null;
        } else {
            this._callbackData = params.callbackData;
        }
        if (typeof params.switchInlineQuery === 'undefined' || params.switchInlineQuery === null) {
            this._switchInlineQuery = null;
        } else {
            this._switchInlineQuery = params.switchInlineQuery;
        }
        if (typeof params.switchInlineQueryCurrentChat === 'undefined' || params.switchInlineQueryCurrentChat === null) {
            this._switchInlineQueryCurrentChat = null;
        } else {
            this._switchInlineQueryCurrentChat = params.switchInlineQueryCurrentChat;
        }
        if (typeof params.callbackGame === 'undefined' || params.callbackGame === null) {
            this._callbackGame = null;
        } else {
            this._callbackGame = params.callbackGame;
        }
        if (typeof params.pay === 'undefined' || params.pay === null) {
            this._pay = null;
        } else {
            this._pay = params.pay;
        }
    }

    get text(): string {
        return this._text;
    }
    get url(): string | null {
        return this._url;
    }
    get loginUrl(): LoginUrl | null {
        return this._loginUrl;
    }
    get callbackData(): string | null {
        return this._callbackData;
    }
    get switchInlineQuery(): string | null {
        return this._switchInlineQuery;
    }
    get switchInlineQueryCurrentChat(): string | null {
        return this._switchInlineQueryCurrentChat;
    }
    get callbackGame(): CallbackGame | null {
        return this._callbackGame;
    }
    get pay(): boolean | null {
        return this._pay;
    }
}

export default InlineKeyboardButton;