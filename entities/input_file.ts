class InputFile {
    name: string;
    file: Buffer;

    constructor(name: string, file: Buffer) {
        this.name = name;
        this.file = file;
    }
}

export default InputFile;