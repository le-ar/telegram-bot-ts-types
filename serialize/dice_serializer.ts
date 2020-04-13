import { Serializer, ConstructorParams } from './serializer';
import Dice from '../entities/dice';


let params: ConstructorParams = {
    value: {
        required: true,
        type: 'number'
    }
}

let DiceSerializer = new Serializer<Dice>(Dice, 'Dice', params);

export default DiceSerializer;
export { DiceSerializer, params as DiceSerializerParams };