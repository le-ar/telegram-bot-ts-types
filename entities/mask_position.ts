class MaskPosition {
    private _point: string;
    private _xShift: number;
    private _yShift: number;
    private _scale: number;

    constructor(params: {
        point: string;
        xShift: number;
        yShift: number;
        scale: number;
    }) {
        this._point = params.point;
        this._xShift = params.xShift;
        this._yShift = params.yShift;
        this._scale = params.scale;
    }

    get point(): string {
        return this._point;
    }
    get xShift(): number {
        return this._xShift;
    }
    get yShift(): number {
        return this._yShift;
    }
    get scale(): number {
        return this._scale;
    }
}

export default MaskPosition;