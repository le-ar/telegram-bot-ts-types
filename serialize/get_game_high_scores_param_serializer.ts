import { Serializer, ConstructorParams } from './serializer';
import GetGameHighScoresParam from '../method_params/get_game_high_scores_param';


let params: ConstructorParams = {
    userId: {
        required: true,
        type: 'number'
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

let GetGameHighScoresParamSerializer = new Serializer<GetGameHighScoresParam>(GetGameHighScoresParam, 'GetGameHighScoresParam', params);

export default GetGameHighScoresParamSerializer;
export { GetGameHighScoresParamSerializer, params as GetGameHighScoresParamSerializerParams };