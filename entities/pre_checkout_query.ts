import User from './user';
import OrderInfo from './order_info';

class PreCheckoutQuery {
    private _id: string;
    private _from: User;
    private _currency: string;
    private _totalAmount: number;
    private _invoicePayload: string;
    private _shippingOptionId: string | null;
    private _orderInfo: OrderInfo | null;

    constructor(params: {
        id: string;
        from: User;
        currency: string;
        totalAmount: number;
        invoicePayload: string;
        shippingOptionId?: string | null;
        orderInfo?: OrderInfo | null;
    }) {
        this._id = params.id;
        this._from = params.from;
        this._currency = params.currency;
        this._totalAmount = params.totalAmount;
        this._invoicePayload = params.invoicePayload;
        if (typeof params.shippingOptionId === 'undefined' || params.shippingOptionId === null) {
            this._shippingOptionId = null;
        } else {
            this._shippingOptionId = params.shippingOptionId;
        }
        if (typeof params.orderInfo === 'undefined' || params.orderInfo === null) {
            this._orderInfo = null;
        } else {
            this._orderInfo = params.orderInfo;
        }
    }

    get id(): string {
        return this._id;
    }
    get from(): User {
        return this._from;
    }
    get currency(): string {
        return this._currency;
    }
    get totalAmount(): number {
        return this._totalAmount;
    }
    get invoicePayload(): string {
        return this._invoicePayload;
    }
    get shippingOptionId(): string | null {
        return this._shippingOptionId;
    }
    get orderInfo(): OrderInfo | null {
        return this._orderInfo;
    }
}

export default PreCheckoutQuery;