import { Serializer, ConstructorParams } from './serializer';
import PassportElementError from '../entities/passport_element_error';


let params: ConstructorParams = {
}

let PassportElementErrorSerializer = new Serializer<PassportElementError>(PassportElementError, 'PassportElementError', params);

export default PassportElementErrorSerializer;
export { PassportElementErrorSerializer, params as PassportElementErrorSerializerParams };