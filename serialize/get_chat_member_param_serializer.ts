import { Serializer, ConstructorParams } from './serializer';
import GetChatMemberParam from '../method_params/get_chat_member_param';


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

let GetChatMemberParamSerializer = new Serializer<GetChatMemberParam>(GetChatMemberParam, 'GetChatMemberParam', params);

export default GetChatMemberParamSerializer;
export { GetChatMemberParamSerializer, params as GetChatMemberParamSerializerParams };