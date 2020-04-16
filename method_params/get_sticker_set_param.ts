class GetStickerSetParam {
    private _name: string;

    constructor(params: {
        name: string;
    }) {
        this._name = params.name;
    }

    get name(): string {
        return this._name;
    }
}

export default GetStickerSetParam;