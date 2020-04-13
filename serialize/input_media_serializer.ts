import { Serializer, ConstructorParams } from './serializer';
import InputMedia from '../entities/input_media';
import { InputMediaAnimationSerializer, InputMediaAnimationSerializerParams } from './input_media_animation_serializer';
import { InputMediaDocumentSerializer, InputMediaDocumentSerializerParams } from './input_media_document_serializer';
import { InputMediaAudioSerializer, InputMediaAudioSerializerParams } from './input_media_audio_serializer';
import { InputMediaPhotoSerializer, InputMediaPhotoSerializerParams } from './input_media_photo_serializer';
import { InputMediaVideoSerializer, InputMediaVideoSerializerParams } from './input_media_video_serializer';

let _InputMediaAnimationSerializer = InputMediaAnimationSerializer;
let _InputMediaDocumentSerializer = InputMediaDocumentSerializer;
let _InputMediaAudioSerializer = InputMediaAudioSerializer;
let _InputMediaPhotoSerializer = InputMediaPhotoSerializer;
let _InputMediaVideoSerializer = InputMediaVideoSerializer;

let params: ConstructorParams = {
}
for (let param in InputMediaAnimationSerializerParams) {
    params[param] = {
        required: false,
        type: InputMediaAnimationSerializerParams[param].type
    };
}
for (let param in InputMediaDocumentSerializerParams) {
    params[param] = {
        required: false,
        type: InputMediaDocumentSerializerParams[param].type
    };
}
for (let param in InputMediaAudioSerializerParams) {
    params[param] = {
        required: false,
        type: InputMediaAudioSerializerParams[param].type
    };
}
for (let param in InputMediaPhotoSerializerParams) {
    params[param] = {
        required: false,
        type: InputMediaPhotoSerializerParams[param].type
    };
}
for (let param in InputMediaVideoSerializerParams) {
    params[param] = {
        required: false,
        type: InputMediaVideoSerializerParams[param].type
    };
}

class fabric {
    constructor(p?: any) {
        let checkParams: { ok: boolean; params?: { [key: string]: any }; } = { ok: false };
        checkParams = _InputMediaAnimationSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InputMediaAnimationSerializer.fromJson(checkParams.params);
        }
        checkParams = _InputMediaDocumentSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InputMediaDocumentSerializer.fromJson(checkParams.params);
        }
        checkParams = _InputMediaAudioSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InputMediaAudioSerializer.fromJson(checkParams.params);
        }
        checkParams = _InputMediaPhotoSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InputMediaPhotoSerializer.fromJson(checkParams.params);
        }
        checkParams = _InputMediaVideoSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InputMediaVideoSerializer.fromJson(checkParams.params);
        }

        throw new Error('Wrong json for types [InputMediaAnimation, InputMediaDocument, InputMediaAudio, InputMediaPhoto, InputMediaVideo]. Json: ' + JSON.stringify(p) + '\n');
    }
}

let InputMediaSerializer = new Serializer<InputMedia>(fabric, 'InputMedia', params);

export default InputMediaSerializer;
export { InputMediaSerializer, params as InputMediaSerializerParams };