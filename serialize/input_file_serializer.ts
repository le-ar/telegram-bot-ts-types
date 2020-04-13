import { Serializer, ConstructorParams } from './serializer';
import InputFile from '../entities/input_file';


let params: ConstructorParams = {
}

let InputFileSerializer = new Serializer<InputFile>(InputFile, 'InputFile', params);

export default InputFileSerializer;
export { InputFileSerializer, params as InputFileSerializerParams };