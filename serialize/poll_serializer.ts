import { Serializer, ConstructorParams } from './serializer';
import Poll from '../entities/poll';
import PollOptionSerializer from './poll_option_serializer';

let _PollOptionSerializer = PollOptionSerializer;

let params: ConstructorParams = {
    id: {
        required: true,
        type: 'string'
    },
    question: {
        required: true,
        type: 'string'
    },
    options: {
        required: true,
        type: 'PollOption[]'
    },
    totalVoterCount: {
        required: true,
        type: 'number'
    },
    isClosed: {
        required: true,
        type: 'boolean'
    },
    isAnonymous: {
        required: true,
        type: 'boolean'
    },
    type: {
        required: true,
        type: 'string'
    },
    allowsMultipleAnswers: {
        required: true,
        type: 'boolean'
    },
    correctOptionId: {
        required: false,
        type: 'number'
    }
}

let PollSerializer = new Serializer<Poll>(Poll, 'Poll', params);

export default PollSerializer;
export { PollSerializer, params as PollSerializerParams };