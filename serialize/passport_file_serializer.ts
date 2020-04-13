import { Serializer, ConstructorParams } from './serializer';
import PassportFile from '../entities/passport_file';


let params: ConstructorParams = {
    fileId: {
        required: true,
        type: 'string'
    },
    fileUniqueId: {
        required: true,
        type: 'string'
    },
    fileSize: {
        required: true,
        type: 'number'
    },
    fileDate: {
        required: true,
        type: 'number'
    }
}

let PassportFileSerializer = new Serializer<PassportFile>(PassportFile, 'PassportFile', params);

export default PassportFileSerializer;
export { PassportFileSerializer, params as PassportFileSerializerParams };