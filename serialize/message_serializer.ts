import { Serializer, ConstructorParams } from './serializer';
import Message from '../entities/message';
import UserSerializer from './user_serializer';
import ChatSerializer from './chat_serializer';
import MessageEntitySerializer from './message_entity_serializer';
import AudioSerializer from './audio_serializer';
import DocumentSerializer from './document_serializer';
import AnimationSerializer from './animation_serializer';
import GameSerializer from './game_serializer';
import PhotoSizeSerializer from './photo_size_serializer';
import StickerSerializer from './sticker_serializer';
import VideoSerializer from './video_serializer';
import VoiceSerializer from './voice_serializer';
import VideoNoteSerializer from './video_note_serializer';
import ContactSerializer from './contact_serializer';
import LocationSerializer from './location_serializer';
import VenueSerializer from './venue_serializer';
import PollSerializer from './poll_serializer';
import DiceSerializer from './dice_serializer';
import InvoiceSerializer from './invoice_serializer';
import SuccessfulPaymentSerializer from './successful_payment_serializer';
import PassportDataSerializer from './passport_data_serializer';
import InlineKeyboardMarkupSerializer from './inline_keyboard_markup_serializer';

let _UserSerializer = UserSerializer;
let _ChatSerializer = ChatSerializer;
let _MessageEntitySerializer = MessageEntitySerializer;
let _AudioSerializer = AudioSerializer;
let _DocumentSerializer = DocumentSerializer;
let _AnimationSerializer = AnimationSerializer;
let _GameSerializer = GameSerializer;
let _PhotoSizeSerializer = PhotoSizeSerializer;
let _StickerSerializer = StickerSerializer;
let _VideoSerializer = VideoSerializer;
let _VoiceSerializer = VoiceSerializer;
let _VideoNoteSerializer = VideoNoteSerializer;
let _ContactSerializer = ContactSerializer;
let _LocationSerializer = LocationSerializer;
let _VenueSerializer = VenueSerializer;
let _PollSerializer = PollSerializer;
let _DiceSerializer = DiceSerializer;
let _InvoiceSerializer = InvoiceSerializer;
let _SuccessfulPaymentSerializer = SuccessfulPaymentSerializer;
let _PassportDataSerializer = PassportDataSerializer;
let _InlineKeyboardMarkupSerializer = InlineKeyboardMarkupSerializer;

let params: ConstructorParams = {
    messageId: {
        required: true,
        type: 'number'
    },
    from: {
        required: false,
        type: 'User'
    },
    date: {
        required: true,
        type: 'number'
    },
    chat: {
        required: true,
        type: 'Chat'
    },
    forwardFrom: {
        required: false,
        type: 'User'
    },
    forwardFromChat: {
        required: false,
        type: 'Chat'
    },
    forwardFromMessageId: {
        required: false,
        type: 'number'
    },
    forwardSignature: {
        required: false,
        type: 'string'
    },
    forwardSenderName: {
        required: false,
        type: 'string'
    },
    forwardDate: {
        required: false,
        type: 'number'
    },
    replyToMessage: {
        required: false,
        type: 'Message'
    },
    editDate: {
        required: false,
        type: 'number'
    },
    mediaGroupId: {
        required: false,
        type: 'string'
    },
    authorSignature: {
        required: false,
        type: 'string'
    },
    text: {
        required: false,
        type: 'string'
    },
    entities: {
        required: false,
        type: 'MessageEntity[]'
    },
    captionEntities: {
        required: false,
        type: 'MessageEntity[]'
    },
    audio: {
        required: false,
        type: 'Audio'
    },
    document: {
        required: false,
        type: 'Document'
    },
    animation: {
        required: false,
        type: 'Animation'
    },
    game: {
        required: false,
        type: 'Game'
    },
    photo: {
        required: false,
        type: 'PhotoSize[]'
    },
    sticker: {
        required: false,
        type: 'Sticker'
    },
    video: {
        required: false,
        type: 'Video'
    },
    voice: {
        required: false,
        type: 'Voice'
    },
    videoNote: {
        required: false,
        type: 'VideoNote'
    },
    caption: {
        required: false,
        type: 'string'
    },
    contact: {
        required: false,
        type: 'Contact'
    },
    location: {
        required: false,
        type: 'Location'
    },
    venue: {
        required: false,
        type: 'Venue'
    },
    poll: {
        required: false,
        type: 'Poll'
    },
    dice: {
        required: false,
        type: 'Dice'
    },
    newChatMembers: {
        required: false,
        type: 'User[]'
    },
    leftChatMember: {
        required: false,
        type: 'User'
    },
    newChatTitle: {
        required: false,
        type: 'string'
    },
    newChatPhoto: {
        required: false,
        type: 'PhotoSize[]'
    },
    deleteChatPhoto: {
        required: false,
        type: 'boolean'
    },
    groupChatCreated: {
        required: false,
        type: 'boolean'
    },
    supergroupChatCreated: {
        required: false,
        type: 'boolean'
    },
    channelChatCreated: {
        required: false,
        type: 'boolean'
    },
    migrateToChatId: {
        required: false,
        type: 'number'
    },
    migrateFromChatId: {
        required: false,
        type: 'number'
    },
    pinnedMessage: {
        required: false,
        type: 'Message'
    },
    invoice: {
        required: false,
        type: 'Invoice'
    },
    successfulPayment: {
        required: false,
        type: 'SuccessfulPayment'
    },
    connectedWebsite: {
        required: false,
        type: 'string'
    },
    passportData: {
        required: false,
        type: 'PassportData'
    },
    replyMarkup: {
        required: false,
        type: 'InlineKeyboardMarkup'
    }
}

let MessageSerializer = new Serializer<Message>(Message, 'Message', params);

export default MessageSerializer;
export { MessageSerializer, params as MessageSerializerParams };