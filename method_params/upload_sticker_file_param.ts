import InputFile from '../entities/input_file';

class UploadStickerFileParam {
    private _userId: number;
    private _pngSticker: InputFile;

    constructor(params: {
        userId: number;
        pngSticker: InputFile;
    }) {
        this._userId = params.userId;
        this._pngSticker = params.pngSticker;
    }

    get userId(): number {
        return this._userId;
    }
    get pngSticker(): InputFile {
        return this._pngSticker;
    }
}

export default UploadStickerFileParam;