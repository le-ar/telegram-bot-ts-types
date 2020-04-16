import { Serializer, ConstructorParams } from './serializer';
import GetChatMembersCountParam from '../method_params/get_chat_members_count_param';


let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    }
}

let GetChatMembersCountParamSerializer = new Serializer<GetChatMembersCountParam>(GetChatMembersCountParam, 'GetChatMembersCountParam', params);

export default GetChatMembersCountParamSerializer;
export { GetChatMembersCountParamSerializer, params as GetChatMembersCountParamSerializerParams };