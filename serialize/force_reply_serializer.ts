import { Serializer, ConstructorParams } from './serializer';
import ForceReply from '../entities/force_reply';


let params: ConstructorParams = {
    forceReply: {
        required: true,
        type: 'boolean'
    },
    selective: {
        required: false,
        type: 'boolean'
    }
}

let ForceReplySerializer = new Serializer<ForceReply>(ForceReply, 'ForceReply', params);

export default ForceReplySerializer;
export { ForceReplySerializer, params as ForceReplySerializerParams };