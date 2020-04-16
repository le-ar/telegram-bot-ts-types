import InputFile from '../entities/input_file';

class SetWebhookParam {
    private _url: string;
    private _certificate: InputFile | null;
    private _maxConnections: number | null;
    private _allowedUpdates: string[] | null;

    constructor(params: {
        url: string;
        certificate?: InputFile | null;
        maxConnections?: number | null;
        allowedUpdates?: string[] | null;
    }) {
        this._url = params.url;
        if (typeof params.certificate === 'undefined' || params.certificate === null) {
            this._certificate = null;
        } else {
            this._certificate = params.certificate;
        }
        if (typeof params.maxConnections === 'undefined' || params.maxConnections === null) {
            this._maxConnections = null;
        } else {
            this._maxConnections = params.maxConnections;
        }
        if (typeof params.allowedUpdates === 'undefined' || params.allowedUpdates === null) {
            this._allowedUpdates = null;
        } else {
            this._allowedUpdates = params.allowedUpdates;
        }
    }

    get url(): string {
        return this._url;
    }
    get certificate(): InputFile | null {
        return this._certificate;
    }
    get maxConnections(): number | null {
        return this._maxConnections;
    }
    get allowedUpdates(): string[] | null {
        return this._allowedUpdates;
    }
}

export default SetWebhookParam;