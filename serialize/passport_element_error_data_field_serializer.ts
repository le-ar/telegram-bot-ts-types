import { Serializer, ConstructorParams } from './serializer';
import PassportElementErrorDataField from '../entities/passport_element_error_data_field';


let params: ConstructorParams = {
    source: {
        required: true,
        type: 'string'
    },
    type: {
        required: true,
        type: 'string'
    },
    fieldName: {
        required: true,
        type: 'string'
    },
    dataHash: {
        required: true,
        type: 'string'
    },
    message: {
        required: true,
        type: 'string'
    }
}

let PassportElementErrorDataFieldSerializer = new Serializer<PassportElementErrorDataField>(PassportElementErrorDataField, 'PassportElementErrorDataField', params);

export default PassportElementErrorDataFieldSerializer;
export { PassportElementErrorDataFieldSerializer, params as PassportElementErrorDataFieldSerializerParams };