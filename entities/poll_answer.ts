import User from './user';

class PollAnswer {
    private _pollId: string;
    private _user: User;
    private _optionIds: number[];

    constructor(params: {
        pollId: string;
        user: User;
        optionIds: number[];
    }) {
        this._pollId = params.pollId;
        this._user = params.user;
        this._optionIds = params.optionIds;
    }

    get pollId(): string {
        return this._pollId;
    }
    get user(): User {
        return this._user;
    }
    get optionIds(): number[] {
        return this._optionIds;
    }
}

export default PollAnswer;