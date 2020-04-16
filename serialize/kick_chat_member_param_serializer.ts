import { Serializer, ConstructorParams } from './serializer';
import KickChatMemberParam from '../method_params/kick_chat_member_param';


let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    },
    userId: {
        required: true,
        type: 'number'
    },
    untilDate: {
        required: false,
        type: 'number'
    }
}

let KickChatMemberParamSerializer = new Serializer<KickChatMemberParam>(KickChatMemberParam, 'KickChatMemberParam', params);

export default KickChatMemberParamSerializer;
export { KickChatMemberParamSerializer, params as KickChatMemberParamSerializerParams };