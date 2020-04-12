import ShippingAddress from './shipping_address';

class OrderInfo {
    private _name: string | null;
    private _phoneNumber: string | null;
    private _email: string | null;
    private _shippingAddress: ShippingAddress | null;

    constructor(params: {
        name?: string | null;
        phoneNumber?: string | null;
        email?: string | null;
        shippingAddress?: ShippingAddress | null;
    }) {
        if (typeof params.name === 'undefined' || params.name === null) {
            this._name = null;
        } else {
            this._name = params.name;
        }
        if (typeof params.phoneNumber === 'undefined' || params.phoneNumber === null) {
            this._phoneNumber = null;
        } else {
            this._phoneNumber = params.phoneNumber;
        }
        if (typeof params.email === 'undefined' || params.email === null) {
            this._email = null;
        } else {
            this._email = params.email;
        }
        if (typeof params.shippingAddress === 'undefined' || params.shippingAddress === null) {
            this._shippingAddress = null;
        } else {
            this._shippingAddress = params.shippingAddress;
        }
    }

    get name(): string | null {
        return this._name;
    }
    get phoneNumber(): string | null {
        return this._phoneNumber;
    }
    get email(): string | null {
        return this._email;
    }
    get shippingAddress(): ShippingAddress | null {
        return this._shippingAddress;
    }
}

export default OrderInfo;