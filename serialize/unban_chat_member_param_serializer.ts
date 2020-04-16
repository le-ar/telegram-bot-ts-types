import { Serializer, ConstructorParams } from './serializer';
import UnbanChatMemberParam from '../method_params/unban_chat_member_param';


let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    },
    userId: {
        required: true,
        type: 'number'
    }
}

let UnbanChatMemberParamSerializer = new Serializer<UnbanChatMemberParam>(UnbanChatMemberParam, 'UnbanChatMemberParam', params);

export default UnbanChatMemberParamSerializer;
export { UnbanChatMemberParamSerializer, params as UnbanChatMemberParamSerializerParams };