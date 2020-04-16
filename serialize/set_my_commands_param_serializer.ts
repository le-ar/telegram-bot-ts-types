import { Serializer, ConstructorParams } from './serializer';
import SetMyCommandsParam from '../method_params/set_my_commands_param';
import BotCommandSerializer from './bot_command_serializer';

let _BotCommandSerializer = BotCommandSerializer;

let params: ConstructorParams = {
    commands: {
        required: true,
        type: 'BotCommand[]'
    }
}

let SetMyCommandsParamSerializer = new Serializer<SetMyCommandsParam>(SetMyCommandsParam, 'SetMyCommandsParam', params);

export default SetMyCommandsParamSerializer;
export { SetMyCommandsParamSerializer, params as SetMyCommandsParamSerializerParams };