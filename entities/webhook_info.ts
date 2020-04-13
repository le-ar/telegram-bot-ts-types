class WebhookInfo {
    private _url: string;
    private _hasCustomCertificate: boolean;
    private _pendingUpdateCount: number;
    private _lastErrorDate: number | null;
    private _lastErrorMessage: string | null;
    private _maxConnections: number | null;
    private _allowedUpdates: string[] | null;

    constructor(params: {
        url: string;
        hasCustomCertificate: boolean;
        pendingUpdateCount: number;
        lastErrorDate?: number | null;
        lastErrorMessage?: string | null;
        maxConnections?: number | null;
        allowedUpdates?: string[] | null;
    }) {
        this._url = params.url;
        this._hasCustomCertificate = params.hasCustomCertificate;
        this._pendingUpdateCount = params.pendingUpdateCount;
        if (typeof params.lastErrorDate === 'undefined' || params.lastErrorDate === null) {
            this._lastErrorDate = null;
        } else {
            this._lastErrorDate = params.lastErrorDate;
        }
        if (typeof params.lastErrorMessage === 'undefined' || params.lastErrorMessage === null) {
            this._lastErrorMessage = null;
        } else {
            this._lastErrorMessage = params.lastErrorMessage;
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
    get hasCustomCertificate(): boolean {
        return this._hasCustomCertificate;
    }
    get pendingUpdateCount(): number {
        return this._pendingUpdateCount;
    }
    get lastErrorDate(): number | null {
        return this._lastErrorDate;
    }
    get lastErrorMessage(): string | null {
        return this._lastErrorMessage;
    }
    get maxConnections(): number | null {
        return this._maxConnections;
    }
    get allowedUpdates(): string[] | null {
        return this._allowedUpdates;
    }
}

export default WebhookInfo;