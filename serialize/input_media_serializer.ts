import { Serializer, ConstructorParams } from './serializer';
import InputMedia from '../entities/input_media';


let params: ConstructorParams = {
}

let InputMediaSerializer = new Serializer<InputMedia>(InputMedia, 'InputMedia', params);

export default InputMediaSerializer;
export { InputMediaSerializer, params as InputMediaSerializerParams };