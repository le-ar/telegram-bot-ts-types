import { Serializer, ConstructorParams } from './serializer';
import ExportChatInviteLinkParam from '../method_params/export_chat_invite_link_param';


let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    }
}

let ExportChatInviteLinkParamSerializer = new Serializer<ExportChatInviteLinkParam>(ExportChatInviteLinkParam, 'ExportChatInviteLinkParam', params);

export default ExportChatInviteLinkParamSerializer;
export { ExportChatInviteLinkParamSerializer, params as ExportChatInviteLinkParamSerializerParams };