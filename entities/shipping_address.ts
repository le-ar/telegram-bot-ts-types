class ShippingAddress {
    private _countryCode: string;
    private _state: string;
    private _city: string;
    private _streetLine1: string;
    private _streetLine2: string;
    private _postCode: string;

    constructor(params: {
        countryCode: string;
        state: string;
        city: string;
        streetLine1: string;
        streetLine2: string;
        postCode: string;
    }) {
        this._countryCode = params.countryCode;
        this._state = params.state;
        this._city = params.city;
        this._streetLine1 = params.streetLine1;
        this._streetLine2 = params.streetLine2;
        this._postCode = params.postCode;
    }

    get countryCode(): string {
        return this._countryCode;
    }
    get state(): string {
        return this._state;
    }
    get city(): string {
        return this._city;
    }
    get streetLine1(): string {
        return this._streetLine1;
    }
    get streetLine2(): string {
        return this._streetLine2;
    }
    get postCode(): string {
        return this._postCode;
    }
}

export default ShippingAddress;