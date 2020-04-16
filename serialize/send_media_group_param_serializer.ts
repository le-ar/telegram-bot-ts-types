import { Serializer, ConstructorParams } from './serializer';
import SendMediaGroupParam from '../method_params/send_media_group_param';
import InputMediaPhotoSerializer from './input_media_photo_serializer';
import InputMediaVideoSerializer from './input_media_video_serializer';

let _InputMediaPhotoSerializer = InputMediaPhotoSerializer;
let _InputMediaVideoSerializer = InputMediaVideoSerializer;

let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    },
    media: {
        required: true,
        type: 'InputMediaPhoto[] | InputMediaVideo[]'
    },
    disableNotification: {
        required: false,
        type: 'boolean'
    },
    replyToMessageId: {
        required: false,
        type: 'number'
    }
}

let SendMediaGroupParamSerializer = new Serializer<SendMediaGroupParam>(SendMediaGroupParam, 'SendMediaGroupParam', params);

export default SendMediaGroupParamSerializer;
export { SendMediaGroupParamSerializer, params as SendMediaGroupParamSerializerParams };