class ChatPhoto {
    private _smallFileId: string;
    private _smallFileUniqueId: string;
    private _bigFileId: string;
    private _bigFileUniqueId: string;

    constructor(params: {
        smallFileId: string;
        smallFileUniqueId: string;
        bigFileId: string;
        bigFileUniqueId: string;
    }) {
        this._smallFileId = params.smallFileId;
        this._smallFileUniqueId = params.smallFileUniqueId;
        this._bigFileId = params.bigFileId;
        this._bigFileUniqueId = params.bigFileUniqueId;
    }

    get smallFileId(): string {
        return this._smallFileId;
    }
    get smallFileUniqueId(): string {
        return this._smallFileUniqueId;
    }
    get bigFileId(): string {
        return this._bigFileId;
    }
    get bigFileUniqueId(): string {
        return this._bigFileUniqueId;
    }
}

export default ChatPhoto;