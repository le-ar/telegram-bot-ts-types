class Invoice {
    private _title: string;
    private _description: string;
    private _startParameter: string;
    private _currency: string;
    private _totalAmount: number;

    constructor(params: {
        title: string;
        description: string;
        startParameter: string;
        currency: string;
        totalAmount: number;
    }) {
        this._title = params.title;
        this._description = params.description;
        this._startParameter = params.startParameter;
        this._currency = params.currency;
        this._totalAmount = params.totalAmount;
    }

    get title(): string {
        return this._title;
    }
    get description(): string {
        return this._description;
    }
    get startParameter(): string {
        return this._startParameter;
    }
    get currency(): string {
        return this._currency;
    }
    get totalAmount(): number {
        return this._totalAmount;
    }
}

export default Invoice;