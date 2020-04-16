import BotCommand from '../entities/bot_command';

class SetMyCommandsParam {
    private _commands: BotCommand[];

    constructor(params: {
        commands: BotCommand[];
    }) {
        this._commands = params.commands;
    }

    get commands(): BotCommand[] {
        return this._commands;
    }
}

export default SetMyCommandsParam;