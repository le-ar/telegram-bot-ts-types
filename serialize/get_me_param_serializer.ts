import { Serializer, ConstructorParams } from './serializer';
import GetMeParam from '../method_params/get_me_param';


let params: ConstructorParams = {
}

let GetMeParamSerializer = new Serializer<GetMeParam>(GetMeParam, 'GetMeParam', params);

export default GetMeParamSerializer;
export { GetMeParamSerializer, params as GetMeParamSerializerParams };