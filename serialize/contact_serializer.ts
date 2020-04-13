import { Serializer, ConstructorParams } from './serializer';
import Contact from '../entities/contact';


let params: ConstructorParams = {
    phoneNumber: {
        required: true,
        type: 'string'
    },
    firstName: {
        required: true,
        type: 'string'
    },
    lastName: {
        required: false,
        type: 'string'
    },
    userId: {
        required: false,
        type: 'number'
    },
    vcard: {
        required: false,
        type: 'string'
    }
}

let ContactSerializer = new Serializer<Contact>(Contact, 'Contact', params);

export default ContactSerializer;
export { ContactSerializer, params as ContactSerializerParams };