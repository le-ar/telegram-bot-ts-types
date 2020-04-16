import { Serializer, ConstructorParams } from './serializer';
import SetWebhookParam from '../method_params/set_webhook_param';


let params: ConstructorParams = {
    url: {
        required: true,
        type: 'string'
    },
    certificate: {
        required: false,
        type: 'InputFile'
    },
    maxConnections: {
        required: false,
        type: 'number'
    },
    allowedUpdates: {
        required: false,
        type: 'string[]'
    }
}

let SetWebhookParamSerializer = new Serializer<SetWebhookParam>(SetWebhookParam, 'SetWebhookParam', params);

export default SetWebhookParamSerializer;
export { SetWebhookParamSerializer, params as SetWebhookParamSerializerParams };