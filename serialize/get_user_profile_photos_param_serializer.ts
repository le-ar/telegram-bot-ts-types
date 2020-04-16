import { Serializer, ConstructorParams } from './serializer';
import GetUserProfilePhotosParam from '../method_params/get_user_profile_photos_param';


let params: ConstructorParams = {
    userId: {
        required: true,
        type: 'number'
    },
    offset: {
        required: false,
        type: 'number'
    },
    limit: {
        required: false,
        type: 'number'
    }
}

let GetUserProfilePhotosParamSerializer = new Serializer<GetUserProfilePhotosParam>(GetUserProfilePhotosParam, 'GetUserProfilePhotosParam', params);

export default GetUserProfilePhotosParamSerializer;
export { GetUserProfilePhotosParamSerializer, params as GetUserProfilePhotosParamSerializerParams };