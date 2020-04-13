import { Serializer, ConstructorParams } from './serializer';
import InlineQueryResult from '../entities/inline_query_result';
import { InlineQueryResultCachedAudioSerializer, InlineQueryResultCachedAudioSerializerParams } from './inline_query_result_cached_audio_serializer';
import { InlineQueryResultCachedDocumentSerializer, InlineQueryResultCachedDocumentSerializerParams } from './inline_query_result_cached_document_serializer';
import { InlineQueryResultCachedGifSerializer, InlineQueryResultCachedGifSerializerParams } from './inline_query_result_cached_gif_serializer';
import { InlineQueryResultCachedMpeg4GifSerializer, InlineQueryResultCachedMpeg4GifSerializerParams } from './inline_query_result_cached_mpeg4_gif_serializer';
import { InlineQueryResultCachedPhotoSerializer, InlineQueryResultCachedPhotoSerializerParams } from './inline_query_result_cached_photo_serializer';
import { InlineQueryResultCachedStickerSerializer, InlineQueryResultCachedStickerSerializerParams } from './inline_query_result_cached_sticker_serializer';
import { InlineQueryResultCachedVideoSerializer, InlineQueryResultCachedVideoSerializerParams } from './inline_query_result_cached_video_serializer';
import { InlineQueryResultCachedVoiceSerializer, InlineQueryResultCachedVoiceSerializerParams } from './inline_query_result_cached_voice_serializer';
import { InlineQueryResultArticleSerializer, InlineQueryResultArticleSerializerParams } from './inline_query_result_article_serializer';
import { InlineQueryResultAudioSerializer, InlineQueryResultAudioSerializerParams } from './inline_query_result_audio_serializer';
import { InlineQueryResultContactSerializer, InlineQueryResultContactSerializerParams } from './inline_query_result_contact_serializer';
import { InlineQueryResultGameSerializer, InlineQueryResultGameSerializerParams } from './inline_query_result_game_serializer';
import { InlineQueryResultDocumentSerializer, InlineQueryResultDocumentSerializerParams } from './inline_query_result_document_serializer';
import { InlineQueryResultGifSerializer, InlineQueryResultGifSerializerParams } from './inline_query_result_gif_serializer';
import { InlineQueryResultLocationSerializer, InlineQueryResultLocationSerializerParams } from './inline_query_result_location_serializer';
import { InlineQueryResultMpeg4GifSerializer, InlineQueryResultMpeg4GifSerializerParams } from './inline_query_result_mpeg4_gif_serializer';
import { InlineQueryResultPhotoSerializer, InlineQueryResultPhotoSerializerParams } from './inline_query_result_photo_serializer';
import { InlineQueryResultVenueSerializer, InlineQueryResultVenueSerializerParams } from './inline_query_result_venue_serializer';
import { InlineQueryResultVideoSerializer, InlineQueryResultVideoSerializerParams } from './inline_query_result_video_serializer';
import { InlineQueryResultVoiceSerializer, InlineQueryResultVoiceSerializerParams } from './inline_query_result_voice_serializer';

let _InlineQueryResultCachedAudioSerializer = InlineQueryResultCachedAudioSerializer;
let _InlineQueryResultCachedDocumentSerializer = InlineQueryResultCachedDocumentSerializer;
let _InlineQueryResultCachedGifSerializer = InlineQueryResultCachedGifSerializer;
let _InlineQueryResultCachedMpeg4GifSerializer = InlineQueryResultCachedMpeg4GifSerializer;
let _InlineQueryResultCachedPhotoSerializer = InlineQueryResultCachedPhotoSerializer;
let _InlineQueryResultCachedStickerSerializer = InlineQueryResultCachedStickerSerializer;
let _InlineQueryResultCachedVideoSerializer = InlineQueryResultCachedVideoSerializer;
let _InlineQueryResultCachedVoiceSerializer = InlineQueryResultCachedVoiceSerializer;
let _InlineQueryResultArticleSerializer = InlineQueryResultArticleSerializer;
let _InlineQueryResultAudioSerializer = InlineQueryResultAudioSerializer;
let _InlineQueryResultContactSerializer = InlineQueryResultContactSerializer;
let _InlineQueryResultGameSerializer = InlineQueryResultGameSerializer;
let _InlineQueryResultDocumentSerializer = InlineQueryResultDocumentSerializer;
let _InlineQueryResultGifSerializer = InlineQueryResultGifSerializer;
let _InlineQueryResultLocationSerializer = InlineQueryResultLocationSerializer;
let _InlineQueryResultMpeg4GifSerializer = InlineQueryResultMpeg4GifSerializer;
let _InlineQueryResultPhotoSerializer = InlineQueryResultPhotoSerializer;
let _InlineQueryResultVenueSerializer = InlineQueryResultVenueSerializer;
let _InlineQueryResultVideoSerializer = InlineQueryResultVideoSerializer;
let _InlineQueryResultVoiceSerializer = InlineQueryResultVoiceSerializer;

let params: ConstructorParams = {
}
for (let param in InlineQueryResultCachedAudioSerializerParams) {
    params[param] = {
        required: false,
        type: InlineQueryResultCachedAudioSerializerParams[param].type
    };
}
for (let param in InlineQueryResultCachedDocumentSerializerParams) {
    params[param] = {
        required: false,
        type: InlineQueryResultCachedDocumentSerializerParams[param].type
    };
}
for (let param in InlineQueryResultCachedGifSerializerParams) {
    params[param] = {
        required: false,
        type: InlineQueryResultCachedGifSerializerParams[param].type
    };
}
for (let param in InlineQueryResultCachedMpeg4GifSerializerParams) {
    params[param] = {
        required: false,
        type: InlineQueryResultCachedMpeg4GifSerializerParams[param].type
    };
}
for (let param in InlineQueryResultCachedPhotoSerializerParams) {
    params[param] = {
        required: false,
        type: InlineQueryResultCachedPhotoSerializerParams[param].type
    };
}
for (let param in InlineQueryResultCachedStickerSerializerParams) {
    params[param] = {
        required: false,
        type: InlineQueryResultCachedStickerSerializerParams[param].type
    };
}
for (let param in InlineQueryResultCachedVideoSerializerParams) {
    params[param] = {
        required: false,
        type: InlineQueryResultCachedVideoSerializerParams[param].type
    };
}
for (let param in InlineQueryResultCachedVoiceSerializerParams) {
    params[param] = {
        required: false,
        type: InlineQueryResultCachedVoiceSerializerParams[param].type
    };
}
for (let param in InlineQueryResultArticleSerializerParams) {
    params[param] = {
        required: false,
        type: InlineQueryResultArticleSerializerParams[param].type
    };
}
for (let param in InlineQueryResultAudioSerializerParams) {
    params[param] = {
        required: false,
        type: InlineQueryResultAudioSerializerParams[param].type
    };
}
for (let param in InlineQueryResultContactSerializerParams) {
    params[param] = {
        required: false,
        type: InlineQueryResultContactSerializerParams[param].type
    };
}
for (let param in InlineQueryResultGameSerializerParams) {
    params[param] = {
        required: false,
        type: InlineQueryResultGameSerializerParams[param].type
    };
}
for (let param in InlineQueryResultDocumentSerializerParams) {
    params[param] = {
        required: false,
        type: InlineQueryResultDocumentSerializerParams[param].type
    };
}
for (let param in InlineQueryResultGifSerializerParams) {
    params[param] = {
        required: false,
        type: InlineQueryResultGifSerializerParams[param].type
    };
}
for (let param in InlineQueryResultLocationSerializerParams) {
    params[param] = {
        required: false,
        type: InlineQueryResultLocationSerializerParams[param].type
    };
}
for (let param in InlineQueryResultMpeg4GifSerializerParams) {
    params[param] = {
        required: false,
        type: InlineQueryResultMpeg4GifSerializerParams[param].type
    };
}
for (let param in InlineQueryResultPhotoSerializerParams) {
    params[param] = {
        required: false,
        type: InlineQueryResultPhotoSerializerParams[param].type
    };
}
for (let param in InlineQueryResultVenueSerializerParams) {
    params[param] = {
        required: false,
        type: InlineQueryResultVenueSerializerParams[param].type
    };
}
for (let param in InlineQueryResultVideoSerializerParams) {
    params[param] = {
        required: false,
        type: InlineQueryResultVideoSerializerParams[param].type
    };
}
for (let param in InlineQueryResultVoiceSerializerParams) {
    params[param] = {
        required: false,
        type: InlineQueryResultVoiceSerializerParams[param].type
    };
}

class fabric {
    constructor(p?: any) {
        let checkParams: { ok: boolean; params?: { [key: string]: any }; } = { ok: false };
        checkParams = _InlineQueryResultCachedAudioSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InlineQueryResultCachedAudioSerializer.fromJson(checkParams.params);
        }
        checkParams = _InlineQueryResultCachedDocumentSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InlineQueryResultCachedDocumentSerializer.fromJson(checkParams.params);
        }
        checkParams = _InlineQueryResultCachedGifSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InlineQueryResultCachedGifSerializer.fromJson(checkParams.params);
        }
        checkParams = _InlineQueryResultCachedMpeg4GifSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InlineQueryResultCachedMpeg4GifSerializer.fromJson(checkParams.params);
        }
        checkParams = _InlineQueryResultCachedPhotoSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InlineQueryResultCachedPhotoSerializer.fromJson(checkParams.params);
        }
        checkParams = _InlineQueryResultCachedStickerSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InlineQueryResultCachedStickerSerializer.fromJson(checkParams.params);
        }
        checkParams = _InlineQueryResultCachedVideoSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InlineQueryResultCachedVideoSerializer.fromJson(checkParams.params);
        }
        checkParams = _InlineQueryResultCachedVoiceSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InlineQueryResultCachedVoiceSerializer.fromJson(checkParams.params);
        }
        checkParams = _InlineQueryResultArticleSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InlineQueryResultArticleSerializer.fromJson(checkParams.params);
        }
        checkParams = _InlineQueryResultAudioSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InlineQueryResultAudioSerializer.fromJson(checkParams.params);
        }
        checkParams = _InlineQueryResultContactSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InlineQueryResultContactSerializer.fromJson(checkParams.params);
        }
        checkParams = _InlineQueryResultGameSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InlineQueryResultGameSerializer.fromJson(checkParams.params);
        }
        checkParams = _InlineQueryResultDocumentSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InlineQueryResultDocumentSerializer.fromJson(checkParams.params);
        }
        checkParams = _InlineQueryResultGifSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InlineQueryResultGifSerializer.fromJson(checkParams.params);
        }
        checkParams = _InlineQueryResultLocationSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InlineQueryResultLocationSerializer.fromJson(checkParams.params);
        }
        checkParams = _InlineQueryResultMpeg4GifSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InlineQueryResultMpeg4GifSerializer.fromJson(checkParams.params);
        }
        checkParams = _InlineQueryResultPhotoSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InlineQueryResultPhotoSerializer.fromJson(checkParams.params);
        }
        checkParams = _InlineQueryResultVenueSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InlineQueryResultVenueSerializer.fromJson(checkParams.params);
        }
        checkParams = _InlineQueryResultVideoSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InlineQueryResultVideoSerializer.fromJson(checkParams.params);
        }
        checkParams = _InlineQueryResultVoiceSerializer.checkParamsAndReturnInSnakeCaseIfOk(p);
        if (checkParams.ok) {
            return _InlineQueryResultVoiceSerializer.fromJson(checkParams.params);
        }

        throw new Error('Wrong json for types [InlineQueryResultCachedAudio, InlineQueryResultCachedDocument, InlineQueryResultCachedGif, InlineQueryResultCachedMpeg4Gif, InlineQueryResultCachedPhoto, InlineQueryResultCachedSticker, InlineQueryResultCachedVideo, InlineQueryResultCachedVoice, InlineQueryResultArticle, InlineQueryResultAudio, InlineQueryResultContact, InlineQueryResultGame, InlineQueryResultDocument, InlineQueryResultGif, InlineQueryResultLocation, InlineQueryResultMpeg4Gif, InlineQueryResultPhoto, InlineQueryResultVenue, InlineQueryResultVideo, InlineQueryResultVoice]. Json: ' + JSON.stringify(p) + '\n');
    }
}

let InlineQueryResultSerializer = new Serializer<InlineQueryResult>(fabric, 'InlineQueryResult', params);

export default InlineQueryResultSerializer;
export { InlineQueryResultSerializer, params as InlineQueryResultSerializerParams };