import { Serializer, ConstructorParams } from './serializer';
import GetFileParam from '../method_params/get_file_param';


let params: ConstructorParams = {
    fileId: {
        required: true,
        type: 'string'
    }
}

let GetFileParamSerializer = new Serializer<GetFileParam>(GetFileParam, 'GetFileParam', params);

export default GetFileParamSerializer;
export { GetFileParamSerializer, params as GetFileParamSerializerParams };