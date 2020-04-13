import PollOption from './poll_option';

class Poll {
    private _id: string;
    private _question: string;
    private _options: PollOption[];
    private _totalVoterCount: number;
    private _isClosed: boolean;
    private _isAnonymous: boolean;
    private _type: string;
    private _allowsMultipleAnswers: boolean;
    private _correctOptionId: number | null;

    constructor(params: {
        id: string;
        question: string;
        options: PollOption[];
        totalVoterCount: number;
        isClosed: boolean;
        isAnonymous: boolean;
        type: string;
        allowsMultipleAnswers: boolean;
        correctOptionId?: number | null;
    }) {
        this._id = params.id;
        this._question = params.question;
        this._options = params.options;
        this._totalVoterCount = params.totalVoterCount;
        this._isClosed = params.isClosed;
        this._isAnonymous = params.isAnonymous;
        this._type = params.type;
        this._allowsMultipleAnswers = params.allowsMultipleAnswers;
        if (typeof params.correctOptionId === 'undefined' || params.correctOptionId === null) {
            this._correctOptionId = null;
        } else {
            this._correctOptionId = params.correctOptionId;
        }
    }

    get id(): string {
        return this._id;
    }
    get question(): string {
        return this._question;
    }
    get options(): PollOption[] {
        return this._options;
    }
    get totalVoterCount(): number {
        return this._totalVoterCount;
    }
    get isClosed(): boolean {
        return this._isClosed;
    }
    get isAnonymous(): boolean {
        return this._isAnonymous;
    }
    get type(): string {
        return this._type;
    }
    get allowsMultipleAnswers(): boolean {
        return this._allowsMultipleAnswers;
    }
    get correctOptionId(): number | null {
        return this._correctOptionId;
    }
}

export default Poll;