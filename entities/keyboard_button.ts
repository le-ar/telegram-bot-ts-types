import KeyboardButtonPollType from './keyboard_button_poll_type';

class KeyboardButton {
    private _text: string;
    private _requestContact: boolean | null;
    private _requestLocation: boolean | null;
    private _requestPoll: KeyboardButtonPollType | null;

    constructor(params: {
        text: string;
        requestContact?: boolean | null;
        requestLocation?: boolean | null;
        requestPoll?: KeyboardButtonPollType | null;
    }) {
        this._text = params.text;
        if (typeof params.requestContact === 'undefined' || params.requestContact === null) {
            this._requestContact = null;
        } else {
            this._requestContact = params.requestContact;
        }
        if (typeof params.requestLocation === 'undefined' || params.requestLocation === null) {
            this._requestLocation = null;
        } else {
            this._requestLocation = params.requestLocation;
        }
        if (typeof params.requestPoll === 'undefined' || params.requestPoll === null) {
            this._requestPoll = null;
        } else {
            this._requestPoll = params.requestPoll;
        }
    }

    get text(): string {
        return this._text;
    }
    get requestContact(): boolean | null {
        return this._requestContact;
    }
    get requestLocation(): boolean | null {
        return this._requestLocation;
    }
    get requestPoll(): KeyboardButtonPollType | null {
        return this._requestPoll;
    }
}

export default KeyboardButton;