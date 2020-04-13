class Dice {
    private _value: number;

    constructor(params: {
        value: number;
    }) {
        this._value = params.value;
    }

    get value(): number {
        return this._value;
    }
}

export default Dice;