import InputFile from '../entities/input_file';

class SetChatPhotoParam {
    private _chatId: number | string;
    private _photo: InputFile;

    constructor(params: {
        chatId: number | string;
        photo: InputFile;
    }) {
        this._chatId = params.chatId;
        this._photo = params.photo;
    }

    get chatId(): number | string {
        return this._chatId;
    }
    get photo(): InputFile {
        return this._photo;
    }
}

export default SetChatPhotoParam;