import { Serializer, ConstructorParams } from './serializer';
import PollOption from '../entities/poll_option';


let params: ConstructorParams = {
    text: {
        required: true,
        type: 'string'
    },
    voterCount: {
        required: true,
        type: 'number'
    }
}

let PollOptionSerializer = new Serializer<PollOption>(PollOption, 'PollOption', params);

export default PollOptionSerializer;
export { PollOptionSerializer, params as PollOptionSerializerParams };