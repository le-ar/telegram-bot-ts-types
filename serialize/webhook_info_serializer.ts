import { Serializer, ConstructorParams } from './serializer';
import WebhookInfo from '../entities/webhook_info';


let params: ConstructorParams = {
    url: {
        required: true,
        type: 'string'
    },
    hasCustomCertificate: {
        required: true,
        type: 'boolean'
    },
    pendingUpdateCount: {
        required: true,
        type: 'number'
    },
    lastErrorDate: {
        required: false,
        type: 'number'
    },
    lastErrorMessage: {
        required: false,
        type: 'string'
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

let WebhookInfoSerializer = new Serializer<WebhookInfo>(WebhookInfo, 'WebhookInfo', params);

export default WebhookInfoSerializer;
export { WebhookInfoSerializer, params as WebhookInfoSerializerParams };