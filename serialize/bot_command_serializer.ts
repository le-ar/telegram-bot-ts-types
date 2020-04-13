import { Serializer, ConstructorParams } from './serializer';
import BotCommand from '../entities/bot_command';


let params: ConstructorParams = {
    command: {
        required: true,
        type: 'string'
    },
    description: {
        required: true,
        type: 'string'
    }
}

let BotCommandSerializer = new Serializer<BotCommand>(BotCommand, 'BotCommand', params);

export default BotCommandSerializer;
export { BotCommandSerializer, params as BotCommandSerializerParams };