import { Serializer, ConstructorParams } from './serializer';
import GetUpdatesParam from '../method_params/get_updates_param';


let params: ConstructorParams = {
    offset: {
        required: false,
        type: 'number'
    },
    limit: {
        required: false,
        type: 'number'
    },
    timeout: {
        required: false,
        type: 'number'
    },
    allowedUpdates: {
        required: false,
        type: 'string[]'
    }
}

let GetUpdatesParamSerializer = new Serializer<GetUpdatesParam>(GetUpdatesParam, 'GetUpdatesParam', params);

export default GetUpdatesParamSerializer;
export { GetUpdatesParamSerializer, params as GetUpdatesParamSerializerParams };