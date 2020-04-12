import LabeledPrice from './labeled_price';

class ShippingOption {
    private _id: string;
    private _title: string;
    private _prices: LabeledPrice[];

    constructor(params: {
        id: string;
        title: string;
        prices: LabeledPrice[];
    }) {
        this._id = params.id;
        this._title = params.title;
        this._prices = params.prices;
    }

    get id(): string {
        return this._id;
    }
    get title(): string {
        return this._title;
    }
    get prices(): LabeledPrice[] {
        return this._prices;
    }
}

export default ShippingOption;