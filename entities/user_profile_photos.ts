import PhotoSize from './photo_size';

class UserProfilePhotos {
    private _totalCount: number;
    private _photos: PhotoSize[][];

    constructor(params: {
        totalCount: number;
        photos: PhotoSize[][];
    }) {
        this._totalCount = params.totalCount;
        this._photos = params.photos;
    }

    get totalCount(): number {
        return this._totalCount;
    }
    get photos(): PhotoSize[][] {
        return this._photos;
    }
}

export default UserProfilePhotos;