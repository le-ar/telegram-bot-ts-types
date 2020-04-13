import { Serializer, ConstructorParams } from './serializer';
import InputMessageContent from '../entities/input_message_content';
import { InputTextMessageContentSerializer, InputTextMessageContentSerializerParams } from './input_text_message_content_serializer';
import { InputLocationMessageContentSerializer, InputLocationMessageContentSerializerParams } from './input_location_message_content_serializer';
import { InputVenueMessageContentSerializer, InputVenueMessageContentSerializerParams } from './input_venue_message_content_serializer';
import { InputContactMessageContentSerializer, InputContactMessageContentSerializerParams } from './input_contact_message_content_serializer';

let _InputTextMessageContentSerializer = InputTextMessageContentSerializer;
let _InputLocationMessageContentSerializer = InputLocationMessageContentSerializer;
let _InputVenueMessageContentSerializer = InputVenueMessageContentSerializer;
let _InputContactMessageContentSerializer = InputContactMessageContentSerializer;

let params: ConstructorParams = {
}
for (let param in InputTextMessageContentSerializerParams) {
    params[param] = {
        required: false,
        type: InputTextMessageContentSerializerParams[param].type
    };
}
for (let param in InputLocationMessageContentSerializerParams) {
    params[param] = {
        required: false,
        type: InputLocationMessageContentSerializerParams[param].type
    };
}
for (let param in InputVenueMessageContentSerializerParams) {
    params[param] = {
        required: false,
        type: InputVenueMessageContentSerializerParams[param].type
    };
}
for (let param in InputContactMessageContentSerializerParams) {
    params[param] = {
        required: false,
        type: InputContactMessageContentSerializerParams[param].type
    };
}

class fabric {
    constructor(p?: any) {
        let checkParams: { ok: boolean; params?: { [key: string]: any }; } = { ok: false };
        checkParams = _InputTextMessageContentSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InputTextMessageContentSerializer.fromJson(checkParams.params);
        }
        checkParams = _InputLocationMessageContentSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InputLocationMessageContentSerializer.fromJson(checkParams.params);
        }
        checkParams = _InputVenueMessageContentSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InputVenueMessageContentSerializer.fromJson(checkParams.params);
        }
        checkParams = _InputContactMessageContentSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InputContactMessageContentSerializer.fromJson(checkParams.params);
        }

        throw new Error('Wrong json for types [InputTextMessageContent, InputLocationMessageContent, InputVenueMessageContent, InputContactMessageContent]. Json: ' + JSON.stringify(p) + '\n');
    }
}

let InputMessageContentSerializer = new Serializer<InputMessageContent>(fabric, 'InputMessageContent', params);

export default InputMessageContentSerializer;
export { InputMessageContentSerializer, params as InputMessageContentSerializerParams };