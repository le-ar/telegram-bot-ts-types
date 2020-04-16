import { Serializer, ConstructorParams } from './serializer';
import SetGameScoreParam from '../method_params/set_game_score_param';


let params: ConstructorParams = {
    userId: {
        required: true,
        type: 'number'
    },
    score: {
        required: true,
        type: 'number'
    },
    force: {
        required: false,
        type: 'boolean'
    },
    disableEditMessage: {
        required: false,
        type: 'boolean'
    },
    chatId: {
        required: false,
        type: 'number'
    },
    messageId: {
        required: false,
        type: 'number'
    },
    inlineMessageId: {
        required: false,
        type: 'string'
    }
}

let SetGameScoreParamSerializer = new Serializer<SetGameScoreParam>(SetGameScoreParam, 'SetGameScoreParam', params);

export default SetGameScoreParamSerializer;
export { SetGameScoreParamSerializer, params as SetGameScoreParamSerializerParams };