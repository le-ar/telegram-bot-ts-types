import { Serializer, ConstructorParams } from './serializer';
import SetPassportDataErrorsParam from '../method_params/set_passport_data_errors_param';
import PassportElementErrorSerializer from './passport_element_error_serializer';

let _PassportElementErrorSerializer = PassportElementErrorSerializer;

let params: ConstructorParams = {
    userId: {
        required: true,
        type: 'number'
    },
    errors: {
        required: true,
        type: 'PassportElementError[]'
    }
}

let SetPassportDataErrorsParamSerializer = new Serializer<SetPassportDataErrorsParam>(SetPassportDataErrorsParam, 'SetPassportDataErrorsParam', params);

export default SetPassportDataErrorsParamSerializer;
export { SetPassportDataErrorsParamSerializer, params as SetPassportDataErrorsParamSerializerParams };