import { Serializer, ConstructorParams } from './serializer';
import ShippingOption from '../entities/shipping_option';
import LabeledPriceSerializer from './labeled_price_serializer';

let _LabeledPriceSerializer = LabeledPriceSerializer;

let params: ConstructorParams = {
    id: {
        required: true,
        type: 'string'
    },
    title: {
        required: true,
        type: 'string'
    },
    prices: {
        required: true,
        type: 'LabeledPrice[]'
    }
}

let ShippingOptionSerializer = new Serializer<ShippingOption>(ShippingOption, 'ShippingOption', params);

export default ShippingOptionSerializer;
export { ShippingOptionSerializer, params as ShippingOptionSerializerParams };