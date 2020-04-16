import ShippingOption from '../entities/shipping_option';

class AnswerShippingQueryParam {
    private _shippingQueryId: string;
    private _ok: boolean;
    private _shippingOptions: ShippingOption[] | null;
    private _errorMessage: string | null;

    constructor(params: {
        shippingQueryId: string;
        ok: boolean;
        shippingOptions?: ShippingOption[] | null;
        errorMessage?: string | null;
    }) {
        this._shippingQueryId = params.shippingQueryId;
        this._ok = params.ok;
        if (typeof params.shippingOptions === 'undefined' || params.shippingOptions === null) {
            this._shippingOptions = null;
        } else {
            this._shippingOptions = params.shippingOptions;
        }
        if (typeof params.errorMessage === 'undefined' || params.errorMessage === null) {
            this._errorMessage = null;
        } else {
            this._errorMessage = params.errorMessage;
        }
    }

    get shippingQueryId(): string {
        return this._shippingQueryId;
    }
    get ok(): boolean {
        return this._ok;
    }
    get shippingOptions(): ShippingOption[] | null {
        return this._shippingOptions;
    }
    get errorMessage(): string | null {
        return this._errorMessage;
    }
}

export default AnswerShippingQueryParam;