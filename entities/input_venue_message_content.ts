import InputMessageContent from './input_message_content';

class InputVenueMessageContent extends InputMessageContent {
    private _latitude: number;
    private _longitude: number;
    private _title: string;
    private _address: string;
    private _foursquareId: string | null;
    private _foursquareType: string | null;

    constructor(params: {
        latitude: number;
        longitude: number;
        title: string;
        address: string;
        foursquareId?: string | null;
        foursquareType?: string | null;
    }) {
        super();
        this._latitude = params.latitude;
        this._longitude = params.longitude;
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

    get latitude(): number {
        return this._latitude;
    }
    get longitude(): number {
        return this._longitude;
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

export default InputVenueMessageContent;