import { Serializer, ConstructorParams } from './serializer';
import InputMessageContent from '../entities/input_message_content';


let params: ConstructorParams = {
}

let InputMessageContentSerializer = new Serializer<InputMessageContent>(InputMessageContent, 'InputMessageContent', params);

export default InputMessageContentSerializer;
export { InputMessageContentSerializer, params as InputMessageContentSerializerParams };