class PollOption {
    private _text: string;
    private _voterCount: number;

    constructor(params: {
        text: string;
        voterCount: number;
    }) {
        this._text = params.text;
        this._voterCount = params.voterCount;
    }

    get text(): string {
        return this._text;
    }
    get voterCount(): number {
        return this._voterCount;
    }
}

export default PollOption;