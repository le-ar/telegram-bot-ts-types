import { Serializer, ConstructorParams } from './serializer';
import InputMediaDocument from '../entities/input_media_document';
import InputFileSerializer from './input_file_serializer';

let _InputFileSerializer = InputFileSerializer;

let params: ConstructorParams = {
    type: {
        required: true,
        type: 'string'
    },
    media: {
        required: true,
        type: 'string'
    },
    thumb: {
        required: false,
        type: 'InputFile'
    },
    caption: {
        required: false,
        type: 'string'
    },
    parseMode: {
        required: false,
        type: 'string'
    }
}

let InputMediaDocumentSerializer = new Serializer<InputMediaDocument>(InputMediaDocument, 'InputMediaDocument', params);

export default InputMediaDocumentSerializer;
export { InputMediaDocumentSerializer, params as InputMediaDocumentSerializerParams };