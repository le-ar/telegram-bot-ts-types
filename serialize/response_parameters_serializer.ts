import { Serializer, ConstructorParams } from './serializer';
import ResponseParameters from '../entities/response_parameters';


let params: ConstructorParams = {
    migrateToChatId: {
        required: false,
        type: 'number'
    },
    retryAfter: {
        required: false,
        type: 'number'
    }
}

let ResponseParametersSerializer = new Serializer<ResponseParameters>(ResponseParameters, 'ResponseParameters', params);

export default ResponseParametersSerializer;
export { ResponseParametersSerializer, params as ResponseParametersSerializerParams };