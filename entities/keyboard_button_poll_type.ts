class KeyboardButtonPollType {
    private _type: string | null;

    constructor(params: {
        type?: string | null;
    }) {
        if (typeof params.type === 'undefined' || params.type === null) {
            this._type = null;
        } else {
            this._type = params.type;
        }
    }

    get type(): string | null {
        return this._type;
    }
}

export default KeyboardButtonPollType;