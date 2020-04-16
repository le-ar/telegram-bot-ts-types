import { Serializer, ConstructorParams } from './serializer';
import UploadStickerFileParam from '../method_params/upload_sticker_file_param';


let params: ConstructorParams = {
    userId: {
        required: true,
        type: 'number'
    },
    pngSticker: {
        required: true,
        type: 'InputFile'
    }
}

let UploadStickerFileParamSerializer = new Serializer<UploadStickerFileParam>(UploadStickerFileParam, 'UploadStickerFileParam', params);

export default UploadStickerFileParamSerializer;
export { UploadStickerFileParamSerializer, params as UploadStickerFileParamSerializerParams };