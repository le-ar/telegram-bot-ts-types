import User from './user';
import ShippingAddress from './shipping_address';

class ShippingQuery {
    private _id: string;
    private _from: User;
    private _invoicePayload: string;
    private _shippingAddress: ShippingAddress;

    constructor(params: {
        id: string;
        from: User;
        invoicePayload: string;
        shippingAddress: ShippingAddress;
    }) {
        this._id = params.id;
        this._from = params.from;
        this._invoicePayload = params.invoicePayload;
        this._shippingAddress = params.shippingAddress;
    }

    get id(): string {
        return this._id;
    }
    get from(): User {
        return this._from;
    }
    get invoicePayload(): string {
        return this._invoicePayload;
    }
    get shippingAddress(): ShippingAddress {
        return this._shippingAddress;
    }
}

export default ShippingQuery;