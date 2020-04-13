import OrderInfo from './order_info';

class SuccessfulPayment {
    private _currency: string;
    private _totalAmount: number;
    private _invoicePayload: string;
    private _shippingOptionId: string | null;
    private _orderInfo: OrderInfo | null;
    private _telegramPaymentChargeId: string;
    private _providerPaymentChargeId: string;

    constructor(params: {
        currency: string;
        totalAmount: number;
        invoicePayload: string;
        shippingOptionId?: string | null;
        orderInfo?: OrderInfo | null;
        telegramPaymentChargeId: string;
        providerPaymentChargeId: string;
    }) {
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
        this._telegramPaymentChargeId = params.telegramPaymentChargeId;
        this._providerPaymentChargeId = params.providerPaymentChargeId;
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
    get telegramPaymentChargeId(): string {
        return this._telegramPaymentChargeId;
    }
    get providerPaymentChargeId(): string {
        return this._providerPaymentChargeId;
    }
}

export default SuccessfulPayment;