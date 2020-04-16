class SetStickerPositionInSetParam {
    private _sticker: string;
    private _position: number;

    constructor(params: {
        sticker: string;
        position: number;
    }) {
        this._sticker = params.sticker;
        this._position = params.position;
    }

    get sticker(): string {
        return this._sticker;
    }
    get position(): number {
        return this._position;
    }
}

export default SetStickerPositionInSetParam;