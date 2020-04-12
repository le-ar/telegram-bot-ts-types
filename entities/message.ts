import User from './user';
import Chat from './chat';
import MessageEntity from './message_entity';
import Audio from './audio';
import Document from './document';
import Animation from './animation';
import Game from './game';
import PhotoSize from './photo_size';
import Sticker from './sticker';
import Video from './video';
import Voice from './voice';
import VideoNote from './video_note';
import Contact from './contact';
import Location from './location';
import Venue from './venue';
import Poll from './poll';
import Dice from './dice';
import Invoice from './invoice';
import SuccessfulPayment from './successful_payment';
import PassportData from './passport_data';
import InlineKeyboardMarkup from './inline_keyboard_markup';

class Message {
    private _messageId: number;
    private _from: User | null;
    private _date: number;
    private _chat: Chat;
    private _forwardFrom: User | null;
    private _forwardFromChat: Chat | null;
    private _forwardFromMessageId: number | null;
    private _forwardSignature: string | null;
    private _forwardSenderName: string | null;
    private _forwardDate: number | null;
    private _replyToMessage: Message | null;
    private _editDate: number | null;
    private _mediaGroupId: string | null;
    private _authorSignature: string | null;
    private _text: string | null;
    private _entities: MessageEntity[] | null;
    private _captionEntities: MessageEntity[] | null;
    private _audio: Audio | null;
    private _document: Document | null;
    private _animation: Animation | null;
    private _game: Game | null;
    private _photo: PhotoSize[] | null;
    private _sticker: Sticker | null;
    private _video: Video | null;
    private _voice: Voice | null;
    private _videoNote: VideoNote | null;
    private _caption: string | null;
    private _contact: Contact | null;
    private _location: Location | null;
    private _venue: Venue | null;
    private _poll: Poll | null;
    private _dice: Dice | null;
    private _newChatMembers: User[] | null;
    private _leftChatMember: User | null;
    private _newChatTitle: string | null;
    private _newChatPhoto: PhotoSize[] | null;
    private _deleteChatPhoto: true | null;
    private _groupChatCreated: true | null;
    private _supergroupChatCreated: true | null;
    private _channelChatCreated: true | null;
    private _migrateToChatId: number | null;
    private _migrateFromChatId: number | null;
    private _pinnedMessage: Message | null;
    private _invoice: Invoice | null;
    private _successfulPayment: SuccessfulPayment | null;
    private _connectedWebsite: string | null;
    private _passportData: PassportData | null;
    private _replyMarkup: InlineKeyboardMarkup | null;

    constructor(params: {
        messageId: number;
        from?: User | null;
        date: number;
        chat: Chat;
        forwardFrom?: User | null;
        forwardFromChat?: Chat | null;
        forwardFromMessageId?: number | null;
        forwardSignature?: string | null;
        forwardSenderName?: string | null;
        forwardDate?: number | null;
        replyToMessage?: Message | null;
        editDate?: number | null;
        mediaGroupId?: string | null;
        authorSignature?: string | null;
        text?: string | null;
        entities?: MessageEntity[] | null;
        captionEntities?: MessageEntity[] | null;
        audio?: Audio | null;
        document?: Document | null;
        animation?: Animation | null;
        game?: Game | null;
        photo?: PhotoSize[] | null;
        sticker?: Sticker | null;
        video?: Video | null;
        voice?: Voice | null;
        videoNote?: VideoNote | null;
        caption?: string | null;
        contact?: Contact | null;
        location?: Location | null;
        venue?: Venue | null;
        poll?: Poll | null;
        dice?: Dice | null;
        newChatMembers?: User[] | null;
        leftChatMember?: User | null;
        newChatTitle?: string | null;
        newChatPhoto?: PhotoSize[] | null;
        deleteChatPhoto?: true | null;
        groupChatCreated?: true | null;
        supergroupChatCreated?: true | null;
        channelChatCreated?: true | null;
        migrateToChatId?: number | null;
        migrateFromChatId?: number | null;
        pinnedMessage?: Message | null;
        invoice?: Invoice | null;
        successfulPayment?: SuccessfulPayment | null;
        connectedWebsite?: string | null;
        passportData?: PassportData | null;
        replyMarkup?: InlineKeyboardMarkup | null;
    }) {
        this._messageId = params.messageId;
        if (typeof params.from === 'undefined' || params.from === null) {
            this._from = null;
        } else {
            this._from = params.from;
        }
        this._date = params.date;
        this._chat = params.chat;
        if (typeof params.forwardFrom === 'undefined' || params.forwardFrom === null) {
            this._forwardFrom = null;
        } else {
            this._forwardFrom = params.forwardFrom;
        }
        if (typeof params.forwardFromChat === 'undefined' || params.forwardFromChat === null) {
            this._forwardFromChat = null;
        } else {
            this._forwardFromChat = params.forwardFromChat;
        }
        if (typeof params.forwardFromMessageId === 'undefined' || params.forwardFromMessageId === null) {
            this._forwardFromMessageId = null;
        } else {
            this._forwardFromMessageId = params.forwardFromMessageId;
        }
        if (typeof params.forwardSignature === 'undefined' || params.forwardSignature === null) {
            this._forwardSignature = null;
        } else {
            this._forwardSignature = params.forwardSignature;
        }
        if (typeof params.forwardSenderName === 'undefined' || params.forwardSenderName === null) {
            this._forwardSenderName = null;
        } else {
            this._forwardSenderName = params.forwardSenderName;
        }
        if (typeof params.forwardDate === 'undefined' || params.forwardDate === null) {
            this._forwardDate = null;
        } else {
            this._forwardDate = params.forwardDate;
        }
        if (typeof params.replyToMessage === 'undefined' || params.replyToMessage === null) {
            this._replyToMessage = null;
        } else {
            this._replyToMessage = params.replyToMessage;
        }
        if (typeof params.editDate === 'undefined' || params.editDate === null) {
            this._editDate = null;
        } else {
            this._editDate = params.editDate;
        }
        if (typeof params.mediaGroupId === 'undefined' || params.mediaGroupId === null) {
            this._mediaGroupId = null;
        } else {
            this._mediaGroupId = params.mediaGroupId;
        }
        if (typeof params.authorSignature === 'undefined' || params.authorSignature === null) {
            this._authorSignature = null;
        } else {
            this._authorSignature = params.authorSignature;
        }
        if (typeof params.text === 'undefined' || params.text === null) {
            this._text = null;
        } else {
            this._text = params.text;
        }
        if (typeof params.entities === 'undefined' || params.entities === null) {
            this._entities = null;
        } else {
            this._entities = params.entities;
        }
        if (typeof params.captionEntities === 'undefined' || params.captionEntities === null) {
            this._captionEntities = null;
        } else {
            this._captionEntities = params.captionEntities;
        }
        if (typeof params.audio === 'undefined' || params.audio === null) {
            this._audio = null;
        } else {
            this._audio = params.audio;
        }
        if (typeof params.document === 'undefined' || params.document === null) {
            this._document = null;
        } else {
            this._document = params.document;
        }
        if (typeof params.animation === 'undefined' || params.animation === null) {
            this._animation = null;
        } else {
            this._animation = params.animation;
        }
        if (typeof params.game === 'undefined' || params.game === null) {
            this._game = null;
        } else {
            this._game = params.game;
        }
        if (typeof params.photo === 'undefined' || params.photo === null) {
            this._photo = null;
        } else {
            this._photo = params.photo;
        }
        if (typeof params.sticker === 'undefined' || params.sticker === null) {
            this._sticker = null;
        } else {
            this._sticker = params.sticker;
        }
        if (typeof params.video === 'undefined' || params.video === null) {
            this._video = null;
        } else {
            this._video = params.video;
        }
        if (typeof params.voice === 'undefined' || params.voice === null) {
            this._voice = null;
        } else {
            this._voice = params.voice;
        }
        if (typeof params.videoNote === 'undefined' || params.videoNote === null) {
            this._videoNote = null;
        } else {
            this._videoNote = params.videoNote;
        }
        if (typeof params.caption === 'undefined' || params.caption === null) {
            this._caption = null;
        } else {
            this._caption = params.caption;
        }
        if (typeof params.contact === 'undefined' || params.contact === null) {
            this._contact = null;
        } else {
            this._contact = params.contact;
        }
        if (typeof params.location === 'undefined' || params.location === null) {
            this._location = null;
        } else {
            this._location = params.location;
        }
        if (typeof params.venue === 'undefined' || params.venue === null) {
            this._venue = null;
        } else {
            this._venue = params.venue;
        }
        if (typeof params.poll === 'undefined' || params.poll === null) {
            this._poll = null;
        } else {
            this._poll = params.poll;
        }
        if (typeof params.dice === 'undefined' || params.dice === null) {
            this._dice = null;
        } else {
            this._dice = params.dice;
        }
        if (typeof params.newChatMembers === 'undefined' || params.newChatMembers === null) {
            this._newChatMembers = null;
        } else {
            this._newChatMembers = params.newChatMembers;
        }
        if (typeof params.leftChatMember === 'undefined' || params.leftChatMember === null) {
            this._leftChatMember = null;
        } else {
            this._leftChatMember = params.leftChatMember;
        }
        if (typeof params.newChatTitle === 'undefined' || params.newChatTitle === null) {
            this._newChatTitle = null;
        } else {
            this._newChatTitle = params.newChatTitle;
        }
        if (typeof params.newChatPhoto === 'undefined' || params.newChatPhoto === null) {
            this._newChatPhoto = null;
        } else {
            this._newChatPhoto = params.newChatPhoto;
        }
        if (typeof params.deleteChatPhoto === 'undefined' || params.deleteChatPhoto === null) {
            this._deleteChatPhoto = null;
        } else {
            this._deleteChatPhoto = true;
        }
        if (typeof params.groupChatCreated === 'undefined' || params.groupChatCreated === null) {
            this._groupChatCreated = null;
        } else {
            this._groupChatCreated = true;
        }
        if (typeof params.supergroupChatCreated === 'undefined' || params.supergroupChatCreated === null) {
            this._supergroupChatCreated = null;
        } else {
            this._supergroupChatCreated = true;
        }
        if (typeof params.channelChatCreated === 'undefined' || params.channelChatCreated === null) {
            this._channelChatCreated = null;
        } else {
            this._channelChatCreated = true;
        }
        if (typeof params.migrateToChatId === 'undefined' || params.migrateToChatId === null) {
            this._migrateToChatId = null;
        } else {
            this._migrateToChatId = params.migrateToChatId;
        }
        if (typeof params.migrateFromChatId === 'undefined' || params.migrateFromChatId === null) {
            this._migrateFromChatId = null;
        } else {
            this._migrateFromChatId = params.migrateFromChatId;
        }
        if (typeof params.pinnedMessage === 'undefined' || params.pinnedMessage === null) {
            this._pinnedMessage = null;
        } else {
            this._pinnedMessage = params.pinnedMessage;
        }
        if (typeof params.invoice === 'undefined' || params.invoice === null) {
            this._invoice = null;
        } else {
            this._invoice = params.invoice;
        }
        if (typeof params.successfulPayment === 'undefined' || params.successfulPayment === null) {
            this._successfulPayment = null;
        } else {
            this._successfulPayment = params.successfulPayment;
        }
        if (typeof params.connectedWebsite === 'undefined' || params.connectedWebsite === null) {
            this._connectedWebsite = null;
        } else {
            this._connectedWebsite = params.connectedWebsite;
        }
        if (typeof params.passportData === 'undefined' || params.passportData === null) {
            this._passportData = null;
        } else {
            this._passportData = params.passportData;
        }
        if (typeof params.replyMarkup === 'undefined' || params.replyMarkup === null) {
            this._replyMarkup = null;
        } else {
            this._replyMarkup = params.replyMarkup;
        }
    }

    get messageId(): number {
        return this._messageId;
    }
    get from(): User | null {
        return this._from;
    }
    get date(): number {
        return this._date;
    }
    get chat(): Chat {
        return this._chat;
    }
    get forwardFrom(): User | null {
        return this._forwardFrom;
    }
    get forwardFromChat(): Chat | null {
        return this._forwardFromChat;
    }
    get forwardFromMessageId(): number | null {
        return this._forwardFromMessageId;
    }
    get forwardSignature(): string | null {
        return this._forwardSignature;
    }
    get forwardSenderName(): string | null {
        return this._forwardSenderName;
    }
    get forwardDate(): number | null {
        return this._forwardDate;
    }
    get replyToMessage(): Message | null {
        return this._replyToMessage;
    }
    get editDate(): number | null {
        return this._editDate;
    }
    get mediaGroupId(): string | null {
        return this._mediaGroupId;
    }
    get authorSignature(): string | null {
        return this._authorSignature;
    }
    get text(): string | null {
        return this._text;
    }
    get entities(): MessageEntity[] | null {
        return this._entities;
    }
    get captionEntities(): MessageEntity[] | null {
        return this._captionEntities;
    }
    get audio(): Audio | null {
        return this._audio;
    }
    get document(): Document | null {
        return this._document;
    }
    get animation(): Animation | null {
        return this._animation;
    }
    get game(): Game | null {
        return this._game;
    }
    get photo(): PhotoSize[] | null {
        return this._photo;
    }
    get sticker(): Sticker | null {
        return this._sticker;
    }
    get video(): Video | null {
        return this._video;
    }
    get voice(): Voice | null {
        return this._voice;
    }
    get videoNote(): VideoNote | null {
        return this._videoNote;
    }
    get caption(): string | null {
        return this._caption;
    }
    get contact(): Contact | null {
        return this._contact;
    }
    get location(): Location | null {
        return this._location;
    }
    get venue(): Venue | null {
        return this._venue;
    }
    get poll(): Poll | null {
        return this._poll;
    }
    get dice(): Dice | null {
        return this._dice;
    }
    get newChatMembers(): User[] | null {
        return this._newChatMembers;
    }
    get leftChatMember(): User | null {
        return this._leftChatMember;
    }
    get newChatTitle(): string | null {
        return this._newChatTitle;
    }
    get newChatPhoto(): PhotoSize[] | null {
        return this._newChatPhoto;
    }
    get deleteChatPhoto(): true | null {
        return this._deleteChatPhoto;
    }
    get groupChatCreated(): true | null {
        return this._groupChatCreated;
    }
    get supergroupChatCreated(): true | null {
        return this._supergroupChatCreated;
    }
    get channelChatCreated(): true | null {
        return this._channelChatCreated;
    }
    get migrateToChatId(): number | null {
        return this._migrateToChatId;
    }
    get migrateFromChatId(): number | null {
        return this._migrateFromChatId;
    }
    get pinnedMessage(): Message | null {
        return this._pinnedMessage;
    }
    get invoice(): Invoice | null {
        return this._invoice;
    }
    get successfulPayment(): SuccessfulPayment | null {
        return this._successfulPayment;
    }
    get connectedWebsite(): string | null {
        return this._connectedWebsite;
    }
    get passportData(): PassportData | null {
        return this._passportData;
    }
    get replyMarkup(): InlineKeyboardMarkup | null {
        return this._replyMarkup;
    }
}

export default Message;