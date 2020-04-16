import { Serializer, ConstructorParams } from './serializer';
import DeleteMessageParam from '../method_params/delete_message_param';


let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    },
    messageId: {
        required: true,
        type: 'number'
    }
}

let DeleteMessageParamSerializer = new Serializer<DeleteMessageParam>(DeleteMessageParam, 'DeleteMessageParam', params);

export default DeleteMessageParamSerializer;
export { DeleteMessageParamSerializer, params as DeleteMessageParamSerializerParams };