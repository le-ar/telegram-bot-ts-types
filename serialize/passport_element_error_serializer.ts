import { Serializer, ConstructorParams } from './serializer';
import PassportElementError from '../entities/passport_element_error';
import { PassportElementErrorDataFieldSerializer, PassportElementErrorDataFieldSerializerParams } from './passport_element_error_data_field_serializer';
import { PassportElementErrorFrontSideSerializer, PassportElementErrorFrontSideSerializerParams } from './passport_element_error_front_side_serializer';
import { PassportElementErrorReverseSideSerializer, PassportElementErrorReverseSideSerializerParams } from './passport_element_error_reverse_side_serializer';
import { PassportElementErrorSelfieSerializer, PassportElementErrorSelfieSerializerParams } from './passport_element_error_selfie_serializer';
import { PassportElementErrorFileSerializer, PassportElementErrorFileSerializerParams } from './passport_element_error_file_serializer';
import { PassportElementErrorFilesSerializer, PassportElementErrorFilesSerializerParams } from './passport_element_error_files_serializer';
import { PassportElementErrorTranslationFileSerializer, PassportElementErrorTranslationFileSerializerParams } from './passport_element_error_translation_file_serializer';
import { PassportElementErrorTranslationFilesSerializer, PassportElementErrorTranslationFilesSerializerParams } from './passport_element_error_translation_files_serializer';
import { PassportElementErrorUnspecifiedSerializer, PassportElementErrorUnspecifiedSerializerParams } from './passport_element_error_unspecified_serializer';

let _PassportElementErrorDataFieldSerializer = PassportElementErrorDataFieldSerializer;
let _PassportElementErrorFrontSideSerializer = PassportElementErrorFrontSideSerializer;
let _PassportElementErrorReverseSideSerializer = PassportElementErrorReverseSideSerializer;
let _PassportElementErrorSelfieSerializer = PassportElementErrorSelfieSerializer;
let _PassportElementErrorFileSerializer = PassportElementErrorFileSerializer;
let _PassportElementErrorFilesSerializer = PassportElementErrorFilesSerializer;
let _PassportElementErrorTranslationFileSerializer = PassportElementErrorTranslationFileSerializer;
let _PassportElementErrorTranslationFilesSerializer = PassportElementErrorTranslationFilesSerializer;
let _PassportElementErrorUnspecifiedSerializer = PassportElementErrorUnspecifiedSerializer;

let params: ConstructorParams = {
}
for (let param in PassportElementErrorDataFieldSerializerParams) {
    params[param] = {
        required: false,
        type: PassportElementErrorDataFieldSerializerParams[param].type
    };
}
for (let param in PassportElementErrorFrontSideSerializerParams) {
    params[param] = {
        required: false,
        type: PassportElementErrorFrontSideSerializerParams[param].type
    };
}
for (let param in PassportElementErrorReverseSideSerializerParams) {
    params[param] = {
        required: false,
        type: PassportElementErrorReverseSideSerializerParams[param].type
    };
}
for (let param in PassportElementErrorSelfieSerializerParams) {
    params[param] = {
        required: false,
        type: PassportElementErrorSelfieSerializerParams[param].type
    };
}
for (let param in PassportElementErrorFileSerializerParams) {
    params[param] = {
        required: false,
        type: PassportElementErrorFileSerializerParams[param].type
    };
}
for (let param in PassportElementErrorFilesSerializerParams) {
    params[param] = {
        required: false,
        type: PassportElementErrorFilesSerializerParams[param].type
    };
}
for (let param in PassportElementErrorTranslationFileSerializerParams) {
    params[param] = {
        required: false,
        type: PassportElementErrorTranslationFileSerializerParams[param].type
    };
}
for (let param in PassportElementErrorTranslationFilesSerializerParams) {
    params[param] = {
        required: false,
        type: PassportElementErrorTranslationFilesSerializerParams[param].type
    };
}
for (let param in PassportElementErrorUnspecifiedSerializerParams) {
    params[param] = {
        required: false,
        type: PassportElementErrorUnspecifiedSerializerParams[param].type
    };
}

class fabric {
    constructor(p?: any) {
        let checkParams: { ok: boolean; params?: { [key: string]: any }; } = { ok: false };
        checkParams = _PassportElementErrorDataFieldSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _PassportElementErrorDataFieldSerializer.fromJson(checkParams.params);
        }
        checkParams = _PassportElementErrorFrontSideSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _PassportElementErrorFrontSideSerializer.fromJson(checkParams.params);
        }
        checkParams = _PassportElementErrorReverseSideSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _PassportElementErrorReverseSideSerializer.fromJson(checkParams.params);
        }
        checkParams = _PassportElementErrorSelfieSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _PassportElementErrorSelfieSerializer.fromJson(checkParams.params);
        }
        checkParams = _PassportElementErrorFileSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _PassportElementErrorFileSerializer.fromJson(checkParams.params);
        }
        checkParams = _PassportElementErrorFilesSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _PassportElementErrorFilesSerializer.fromJson(checkParams.params);
        }
        checkParams = _PassportElementErrorTranslationFileSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _PassportElementErrorTranslationFileSerializer.fromJson(checkParams.params);
        }
        checkParams = _PassportElementErrorTranslationFilesSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _PassportElementErrorTranslationFilesSerializer.fromJson(checkParams.params);
        }
        checkParams = _PassportElementErrorUnspecifiedSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _PassportElementErrorUnspecifiedSerializer.fromJson(checkParams.params);
        }

        throw new Error('Wrong json for types [PassportElementErrorDataField, PassportElementErrorFrontSide, PassportElementErrorReverseSide, PassportElementErrorSelfie, PassportElementErrorFile, PassportElementErrorFiles, PassportElementErrorTranslationFile, PassportElementErrorTranslationFiles, PassportElementErrorUnspecified]. Json: ' + JSON.stringify(p) + '\n');
    }
}

let PassportElementErrorSerializer = new Serializer<PassportElementError>(fabric, 'PassportElementError', params);

export default PassportElementErrorSerializer;
export { PassportElementErrorSerializer, params as PassportElementErrorSerializerParams };