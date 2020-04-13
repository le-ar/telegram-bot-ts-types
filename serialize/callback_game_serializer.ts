import { Serializer, ConstructorParams } from './serializer';
import CallbackGame from '../entities/callback_game';


let params: ConstructorParams = {
}

let CallbackGameSerializer = new Serializer<CallbackGame>(CallbackGame, 'CallbackGame', params);

export default CallbackGameSerializer;
export { CallbackGameSerializer, params as CallbackGameSerializerParams };