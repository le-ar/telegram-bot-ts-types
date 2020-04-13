import { Serializer, ConstructorParams } from './serializer';
import PollAnswer from '../entities/poll_answer';
import UserSerializer from './user_serializer';

let _UserSerializer = UserSerializer;

let params: ConstructorParams = {
    pollId: {
        required: true,
        type: 'string'
    },
    user: {
        required: true,
        type: 'User'
    },
    optionIds: {
        required: true,
        type: 'number[]'
    }
}

let PollAnswerSerializer = new Serializer<PollAnswer>(PollAnswer, 'PollAnswer', params);

export default PollAnswerSerializer;
export { PollAnswerSerializer, params as PollAnswerSerializerParams };