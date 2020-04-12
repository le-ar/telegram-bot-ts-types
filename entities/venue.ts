import Location from './location';

class Venue {
    private _location: Location;
    private _title: string;
    private _address: string;
    private _foursquareId: string | null;
    private _foursquareType: string | null;

    constructor(params: {
        location: Location;
        title: string;
        address: string;
        foursquareId?: string | null;
        foursquareType?: string | null;
    }) {
        this._location = params.location;
        this._title = params.title;
        this._address = params.address;
        if (typeof params.foursquareId === 'undefined' || params.foursquareId === null) {
            this._foursquareId = null;
        } else {
            this._foursquareId = params.foursquareId;
        }
        if (typeof params.foursquareType === 'undefined' || params.foursquareType === null) {
            this._foursquareType = null;
        } else {
            this._foursquareType = params.foursquareType;
        }
    }

    get location(): Location {
        return this._location;
    }
    get title(): string {
        return this._title;
    }
    get address(): string {
        return this._address;
    }
    get foursquareId(): string | null {
        return this._foursquareId;
    }
    get foursquareType(): string | null {
        return this._foursquareType;
    }
}

export default Venue;