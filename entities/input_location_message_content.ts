class InputLocationMessageContent {
    private _latitude: number;
    private _longitude: number;
    private _livePeriod: number | null;

    constructor(params: {
        latitude: number;
        longitude: number;
        livePeriod?: number | null;
    }) {
        this._latitude = params.latitude;
        this._longitude = params.longitude;
        if (typeof params.livePeriod === 'undefined' || params.livePeriod === null) {
            this._livePeriod = null;
        } else {
            this._livePeriod = params.livePeriod;
        }
    }

    get latitude(): number {
        return this._latitude;
    }
    get longitude(): number {
        return this._longitude;
    }
    get livePeriod(): number | null {
        return this._livePeriod;
    }
}

export default InputLocationMessageContent;