import { Serializer, ConstructorParams } from './serializer';
import InputTextMessageContent from '../entities/input_text_message_content';


let params: ConstructorParams = {
    messageText: {
        required: true,
        type: 'string'
    },
    parseMode: {
        required: false,
        type: 'string'
    },
    disableWebPagePreview: {
        required: false,
        type: 'boolean'
    }
}

let InputTextMessageContentSerializer = new Serializer<InputTextMessageContent>(InputTextMessageContent, 'InputTextMessageContent', params);

export default InputTextMessageContentSerializer;
export { InputTextMessageContentSerializer, params as InputTextMessageContentSerializerParams };