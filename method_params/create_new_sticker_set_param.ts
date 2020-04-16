import InputFile from '../entities/input_file';
import MaskPosition from '../entities/mask_position';

class CreateNewStickerSetParam {
    private _userId: number;
    private _name: string;
    private _title: string;
    private _pngSticker: InputFile | string | null;
    private _tgsSticker: InputFile | null;
    private _emojis: string;
    private _containsMasks: boolean | null;
    private _maskPosition: MaskPosition | null;

    constructor(params: {
        userId: number;
        name: string;
        title: string;
        pngSticker?: InputFile | string | null;
        tgsSticker?: InputFile | null;
        emojis: string;
        containsMasks?: boolean | null;
        maskPosition?: MaskPosition | null;
    }) {
        this._userId = params.userId;
        this._name = params.name;
        this._title = params.title;
        if (typeof params.pngSticker === 'undefined' || params.pngSticker === null) {
            this._pngSticker = null;
        } else {
            this._pngSticker = params.pngSticker;
        }
        if (typeof params.tgsSticker === 'undefined' || params.tgsSticker === null) {
            this._tgsSticker = null;
        } else {
            this._tgsSticker = params.tgsSticker;
        }
        this._emojis = params.emojis;
        if (typeof params.containsMasks === 'undefined' || params.containsMasks === null) {
            this._containsMasks = null;
        } else {
            this._containsMasks = params.containsMasks;
        }
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
    get title(): string {
        return this._title;
    }
    get pngSticker(): InputFile | string | null {
        return this._pngSticker;
    }
    get tgsSticker(): InputFile | null {
        return this._tgsSticker;
    }
    get emojis(): string {
        return this._emojis;
    }
    get containsMasks(): boolean | null {
        return this._containsMasks;
    }
    get maskPosition(): MaskPosition | null {
        return this._maskPosition;
    }
}

export default CreateNewStickerSetParam;