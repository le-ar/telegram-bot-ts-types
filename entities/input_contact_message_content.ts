class InputContactMessageContent {
    private _phoneNumber: string;
    private _firstName: string;
    private _lastName: string | null;
    private _vcard: string | null;

    constructor(params: {
        phoneNumber: string;
        firstName: string;
        lastName?: string | null;
        vcard?: string | null;
    }) {
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
}

export default InputContactMessageContent;