import { Serializer, ConstructorParams } from './serializer';
import Game from '../entities/game';
import PhotoSizeSerializer from './photo_size_serializer';
import MessageEntitySerializer from './message_entity_serializer';
import AnimationSerializer from './animation_serializer';

let _PhotoSizeSerializer = PhotoSizeSerializer;
let _MessageEntitySerializer = MessageEntitySerializer;
let _AnimationSerializer = AnimationSerializer;

let params: ConstructorParams = {
    title: {
        required: true,
        type: 'string'
    },
    description: {
        required: true,
        type: 'string'
    },
    photo: {
        required: true,
        type: 'PhotoSize[]'
    },
    text: {
        required: false,
        type: 'string'
    },
    textEntities: {
        required: false,
        type: 'MessageEntity[]'
    },
    animation: {
        required: false,
        type: 'Animation'
    }
}

let GameSerializer = new Serializer<Game>(Game, 'Game', params);

export default GameSerializer;
export { GameSerializer, params as GameSerializerParams };