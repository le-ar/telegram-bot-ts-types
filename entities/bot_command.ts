class BotCommand {
    private _command: string;
    private _description: string;

    constructor(params: {
        command: string;
        description: string;
    }) {
        this._command = params.command;
        this._description = params.description;
    }

    get command(): string {
        return this._command;
    }
    get description(): string {
        return this._description;
    }
}

export default BotCommand;