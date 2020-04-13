import { Serializer, ConstructorParams } from './serializer';
import GameHighScore from '../entities/game_high_score';
import UserSerializer from './user_serializer';

let _UserSerializer = UserSerializer;

let params: ConstructorParams = {
    position: {
        required: true,
        type: 'number'
    },
    user: {
        required: true,
        type: 'User'
    },
    score: {
        required: true,
        type: 'number'
    }
}

let GameHighScoreSerializer = new Serializer<GameHighScore>(GameHighScore, 'GameHighScore', params);

export default GameHighScoreSerializer;
export { GameHighScoreSerializer, params as GameHighScoreSerializerParams };