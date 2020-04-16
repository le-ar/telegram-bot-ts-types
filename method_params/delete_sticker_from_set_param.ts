class DeleteStickerFromSetParam {
    private _sticker: string;

    constructor(params: {
        sticker: string;
    }) {
        this._sticker = params.sticker;
    }

    get sticker(): string {
        return this._sticker;
    }
}

export default DeleteStickerFromSetParam;