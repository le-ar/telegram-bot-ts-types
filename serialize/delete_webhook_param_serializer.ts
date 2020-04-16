import { Serializer, ConstructorParams } from './serializer';
import DeleteWebhookParam from '../method_params/delete_webhook_param';


let params: ConstructorParams = {
}

let DeleteWebhookParamSerializer = new Serializer<DeleteWebhookParam>(DeleteWebhookParam, 'DeleteWebhookParam', params);

export default DeleteWebhookParamSerializer;
export { DeleteWebhookParamSerializer, params as DeleteWebhookParamSerializerParams };