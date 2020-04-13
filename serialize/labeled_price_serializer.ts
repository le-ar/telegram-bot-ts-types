import { Serializer, ConstructorParams } from './serializer';
import LabeledPrice from '../entities/labeled_price';


let params: ConstructorParams = {
    label: {
        required: true,
        type: 'string'
    },
    amount: {
        required: true,
        type: 'number'
    }
}

let LabeledPriceSerializer = new Serializer<LabeledPrice>(LabeledPrice, 'LabeledPrice', params);

export default LabeledPriceSerializer;
export { LabeledPriceSerializer, params as LabeledPriceSerializerParams };