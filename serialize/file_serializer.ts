import { Serializer, ConstructorParams } from './serializer';
import File from '../entities/file';


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
        required: false,
        type: 'number'
    },
    filePath: {
        required: false,
        type: 'string'
    }
}

let FileSerializer = new Serializer<File>(File, 'File', params);

export default FileSerializer;
export { FileSerializer, params as FileSerializerParams };