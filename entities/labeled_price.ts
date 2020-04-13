class LabeledPrice {
    private _label: string;
    private _amount: number;

    constructor(params: {
        label: string;
        amount: number;
    }) {
        this._label = params.label;
        this._amount = params.amount;
    }

    get label(): string {
        return this._label;
    }
    get amount(): number {
        return this._amount;
    }
}

export default LabeledPrice;