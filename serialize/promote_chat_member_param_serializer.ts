import { Serializer, ConstructorParams } from './serializer';
import PromoteChatMemberParam from '../method_params/promote_chat_member_param';


let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    },
    userId: {
        required: true,
        type: 'number'
    },
    canChangeInfo: {
        required: false,
        type: 'boolean'
    },
    canPostMessages: {
        required: false,
        type: 'boolean'
    },
    canEditMessages: {
        required: false,
        type: 'boolean'
    },
    canDeleteMessages: {
        required: false,
        type: 'boolean'
    },
    canInviteUsers: {
        required: false,
        type: 'boolean'
    },
    canRestrictMembers: {
        required: false,
        type: 'boolean'
    },
    canPinMessages: {
        required: false,
        type: 'boolean'
    },
    canPromoteMembers: {
        required: false,
        type: 'boolean'
    }
}

let PromoteChatMemberParamSerializer = new Serializer<PromoteChatMemberParam>(PromoteChatMemberParam, 'PromoteChatMemberParam', params);

export default PromoteChatMemberParamSerializer;
export { PromoteChatMemberParamSerializer, params as PromoteChatMemberParamSerializerParams };