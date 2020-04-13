import { Serializer, ConstructorParams } from './serializer';
import Invoice from '../entities/invoice';


let params: ConstructorParams = {
    title: {
        required: true,
        type: 'string'
    },
    description: {
        required: true,
        type: 'string'
    },
    startParameter: {
        required: true,
        type: 'string'
    },
    currency: {
        required: true,
        type: 'string'
    },
    totalAmount: {
        required: true,
        type: 'number'
    }
}

let InvoiceSerializer = new Serializer<Invoice>(Invoice, 'Invoice', params);

export default InvoiceSerializer;
export { InvoiceSerializer, params as InvoiceSerializerParams };