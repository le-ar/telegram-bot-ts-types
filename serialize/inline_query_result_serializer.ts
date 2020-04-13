import { Serializer, ConstructorParams } from './serializer';
import InlineQueryResult from '../entities/inline_query_result';


let params: ConstructorParams = {
}

let InlineQueryResultSerializer = new Serializer<InlineQueryResult>(InlineQueryResult, 'InlineQueryResult', params);

export default InlineQueryResultSerializer;
export { InlineQueryResultSerializer, params as InlineQueryResultSerializerParams };