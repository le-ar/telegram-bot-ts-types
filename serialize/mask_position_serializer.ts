import { Serializer, ConstructorParams } from './serializer';
import MaskPosition from '../entities/mask_position';


let params: ConstructorParams = {
    point: {
        required: true,
        type: 'string'
    },
    xShift: {
        required: true,
        type: 'number'
    },
    yShift: {
        required: true,
        type: 'number'
    },
    scale: {
        required: true,
        type: 'number'
    }
}

let MaskPositionSerializer = new Serializer<MaskPosition>(MaskPosition, 'MaskPosition', params);

export default MaskPositionSerializer;
export { MaskPositionSerializer, params as MaskPositionSerializerParams };