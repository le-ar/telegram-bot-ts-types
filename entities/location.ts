class Location {
    private _longitude: number;
    private _latitude: number;

    constructor(params: {
        longitude: number;
        latitude: number;
    }) {
        this._longitude = params.longitude;
        this._latitude = params.latitude;
    }

    get longitude(): number {
        return this._longitude;
    }
    get latitude(): number {
        return this._latitude;
    }
}

export default Location;