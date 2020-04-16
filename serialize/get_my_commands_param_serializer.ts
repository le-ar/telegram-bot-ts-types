import { Serializer, ConstructorParams } from './serializer';
import GetMyCommandsParam from '../method_params/get_my_commands_param';


let params: ConstructorParams = {
}

let GetMyCommandsParamSerializer = new Serializer<GetMyCommandsParam>(GetMyCommandsParam, 'GetMyCommandsParam', params);

export default GetMyCommandsParamSerializer;
export { GetMyCommandsParamSerializer, params as GetMyCommandsParamSerializerParams };