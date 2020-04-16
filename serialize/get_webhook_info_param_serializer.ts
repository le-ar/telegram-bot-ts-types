import { Serializer, ConstructorParams } from './serializer';
import GetWebhookInfoParam from '../method_params/get_webhook_info_param';


let params: ConstructorParams = {
}

let GetWebhookInfoParamSerializer = new Serializer<GetWebhookInfoParam>(GetWebhookInfoParam, 'GetWebhookInfoParam', params);

export default GetWebhookInfoParamSerializer;
export { GetWebhookInfoParamSerializer, params as GetWebhookInfoParamSerializerParams };