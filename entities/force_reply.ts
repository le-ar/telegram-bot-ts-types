class ForceReply {
    private _forceReply: true;
    private _selective: boolean | null;

    constructor(params: {
        selective?: boolean | null;
    }) {
        this._forceReply = true;
        if (typeof params.selective === 'undefined' || params.selective === null) {
            this._selective = null;
        } else {
            this._selective = params.selective;
        }
    }

    get forceReply(): true {
        return this._forceReply;
    }
    get selective(): boolean | null {
        return this._selective;
    }
}

export default ForceReply;