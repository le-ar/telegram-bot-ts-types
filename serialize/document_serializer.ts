import { Serializer, ConstructorParams } from './serializer';
import Document from '../entities/document';
import PhotoSizeSerializer from './photo_size_serializer';

let _PhotoSizeSerializer = PhotoSizeSerializer;

let params: ConstructorParams = {
    fileId: {
        required: true,
        type: 'string'
    },
    fileUniqueId: {
        required: true,
        type: 'string'
    },
    thumb: {
        required: false,
        type: 'PhotoSize'
    },
    fileName: {
        required: false,
        type: 'string'
    },
    mimeType: {
        required: false,
        type: 'string'
    },
    fileSize: {
        required: false,
        type: 'number'
    }
}

let DocumentSerializer = new Serializer<Document>(Document, 'Document', params);

export default DocumentSerializer;
export { DocumentSerializer, params as DocumentSerializerParams };