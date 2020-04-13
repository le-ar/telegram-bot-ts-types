import User from './user';

class GameHighScore {
    private _position: number;
    private _user: User;
    private _score: number;

    constructor(params: {
        position: number;
        user: User;
        score: number;
    }) {
        this._position = params.position;
        this._user = params.user;
        this._score = params.score;
    }

    get position(): number {
        return this._position;
    }
    get user(): User {
        return this._user;
    }
    get score(): number {
        return this._score;
    }
}

export default GameHighScore;