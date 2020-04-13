import { Serializer, ConstructorParams } from './serializer';
import Voice from '../entities/voice';


let params: ConstructorParams = {
    fileId: {
        required: true,
        type: 'string'
    },
    fileUniqueId: {
        required: true,
        type: 'string'
    },
    duration: {
        required: true,
        type: 'number'
    },
    mimeType: {
        required: false,
        type: 'string'
    },
    fileSize: {
        required: false,
        type: 'number'
    }
}

let VoiceSerializer = new Serializer<Voice>(Voice, 'Voice', params);

export default VoiceSerializer;
export { VoiceSerializer, params as VoiceSerializerParams };