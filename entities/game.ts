import PhotoSize from './photo_size';
import MessageEntity from './message_entity';
import Animation from './animation';

class Game {
    private _title: string;
    private _description: string;
    private _photo: PhotoSize[];
    private _text: string | null;
    private _textEntities: MessageEntity[] | null;
    private _animation: Animation | null;

    constructor(params: {
        title: string;
        description: string;
        photo: PhotoSize[];
        text?: string | null;
        textEntities?: MessageEntity[] | null;
        animation?: Animation | null;
    }) {
        this._title = params.title;
        this._description = params.description;
        this._photo = params.photo;
        if (typeof params.text === 'undefined' || params.text === null) {
            this._text = null;
        } else {
            this._text = params.text;
        }
        if (typeof params.textEntities === 'undefined' || params.textEntities === null) {
            this._textEntities = null;
        } else {
            this._textEntities = params.textEntities;
        }
        if (typeof params.animation === 'undefined' || params.animation === null) {
            this._animation = null;
        } else {
            this._animation = params.animation;
        }
    }

    get title(): string {
        return this._title;
    }
    get description(): string {
        return this._description;
    }
    get photo(): PhotoSize[] {
        return this._photo;
    }
    get text(): string | null {
        return this._text;
    }
    get textEntities(): MessageEntity[] | null {
        return this._textEntities;
    }
    get animation(): Animation | null {
        return this._animation;
    }
}

export default Game;