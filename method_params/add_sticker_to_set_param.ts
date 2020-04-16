import InputFile from '../entities/input_file';
import MaskPosition from '../entities/mask_position';

class AddStickerToSetParam {
    private _userId: number;
    private _name: string;
    private _pngSticker: InputFile | string;
    private _tgsSticker: InputFile | null;
    private _emojis: string;
    private _maskPosition: MaskPosition | null;

    constructor(params: {
        userId: number;
        name: string;
        pngSticker: InputFile | string;
        tgsSticker?: InputFile | null;
        emojis: string;
        maskPosition?: MaskPosition | null;
    }) {
        this._userId = params.userId;
        this._name = params.name;
        this._pngSticker = params.pngSticker;
        if (typeof params.tgsSticker === 'undefined' || params.tgsSticker === null) {
            this._tgsSticker = null;
        } else {
            this._tgsSticker = params.tgsSticker;
        }
        this._emojis = params.emojis;
        if (typeof params.maskPosition === 'undefined' || params.maskPosition === null) {
            this._maskPosition = null;
        } else {
            this._maskPosition = params.maskPosition;
        }
    }

    get userId(): number {
        return this._userId;
    }
    get name(): string {
        return this._name;
    }
    get pngSticker(): InputFile | string {
        return this._pngSticker;
    }
    get tgsSticker(): InputFile | null {
        return this._tgsSticker;
    }
    get emojis(): string {
        return this._emojis;
    }
    get maskPosition(): MaskPosition | null {
        return this._maskPosition;
    }
}

export default AddStickerToSetParam;