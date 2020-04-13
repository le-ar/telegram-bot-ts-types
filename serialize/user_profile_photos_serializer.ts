import { Serializer, ConstructorParams } from './serializer';
import UserProfilePhotos from '../entities/user_profile_photos';
import PhotoSizeSerializer from './photo_size_serializer';

let _PhotoSizeSerializer = PhotoSizeSerializer;

let params: ConstructorParams = {
    totalCount: {
        required: true,
        type: 'number'
    },
    photos: {
        required: true,
        type: 'PhotoSize[][]'
    }
}

let UserProfilePhotosSerializer = new Serializer<UserProfilePhotos>(UserProfilePhotos, 'UserProfilePhotos', params);

export default UserProfilePhotosSerializer;
export { UserProfilePhotosSerializer, params as UserProfilePhotosSerializerParams };