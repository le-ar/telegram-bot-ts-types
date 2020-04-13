import Message from './message';
import InlineQuery from './inline_query';
import ChosenInlineResult from './chosen_inline_result';
import CallbackQuery from './callback_query';
import ShippingQuery from './shipping_query';
import PreCheckoutQuery from './pre_checkout_query';
import Poll from './poll';
import PollAnswer from './poll_answer';

class Update {
    private _updateId: number;
    private _message: Message | null;
    private _editedMessage: Message | null;
    private _channelPost: Message | null;
    private _editedChannelPost: Message | null;
    private _inlineQuery: InlineQuery | null;
    private _chosenInlineResult: ChosenInlineResult | null;
    private _callbackQuery: CallbackQuery | null;
    private _shippingQuery: ShippingQuery | null;
    private _preCheckoutQuery: PreCheckoutQuery | null;
    private _poll: Poll | null;
    private _pollAnswer: PollAnswer | null;

    constructor(params: {
        updateId: number;
        message?: Message | null;
        editedMessage?: Message | null;
        channelPost?: Message | null;
        editedChannelPost?: Message | null;
        inlineQuery?: InlineQuery | null;
        chosenInlineResult?: ChosenInlineResult | null;
        callbackQuery?: CallbackQuery | null;
        shippingQuery?: ShippingQuery | null;
        preCheckoutQuery?: PreCheckoutQuery | null;
        poll?: Poll | null;
        pollAnswer?: PollAnswer | null;
    }) {
        this._updateId = params.updateId;
        if (typeof params.message === 'undefined' || params.message === null) {
            this._message = null;
        } else {
            this._message = params.message;
        }
        if (typeof params.editedMessage === 'undefined' || params.editedMessage === null) {
            this._editedMessage = null;
        } else {
            this._editedMessage = params.editedMessage;
        }
        if (typeof params.channelPost === 'undefined' || params.channelPost === null) {
            this._channelPost = null;
        } else {
            this._channelPost = params.channelPost;
        }
        if (typeof params.editedChannelPost === 'undefined' || params.editedChannelPost === null) {
            this._editedChannelPost = null;
        } else {
            this._editedChannelPost = params.editedChannelPost;
        }
        if (typeof params.inlineQuery === 'undefined' || params.inlineQuery === null) {
            this._inlineQuery = null;
        } else {
            this._inlineQuery = params.inlineQuery;
        }
        if (typeof params.chosenInlineResult === 'undefined' || params.chosenInlineResult === null) {
            this._chosenInlineResult = null;
        } else {
            this._chosenInlineResult = params.chosenInlineResult;
        }
        if (typeof params.callbackQuery === 'undefined' || params.callbackQuery === null) {
            this._callbackQuery = null;
        } else {
            this._callbackQuery = params.callbackQuery;
        }
        if (typeof params.shippingQuery === 'undefined' || params.shippingQuery === null) {
            this._shippingQuery = null;
        } else {
            this._shippingQuery = params.shippingQuery;
        }
        if (typeof params.preCheckoutQuery === 'undefined' || params.preCheckoutQuery === null) {
            this._preCheckoutQuery = null;
        } else {
            this._preCheckoutQuery = params.preCheckoutQuery;
        }
        if (typeof params.poll === 'undefined' || params.poll === null) {
            this._poll = null;
        } else {
            this._poll = params.poll;
        }
        if (typeof params.pollAnswer === 'undefined' || params.pollAnswer === null) {
            this._pollAnswer = null;
        } else {
            this._pollAnswer = params.pollAnswer;
        }
    }

    get updateId(): number {
        return this._updateId;
    }
    get message(): Message | null {
        return this._message;
    }
    get editedMessage(): Message | null {
        return this._editedMessage;
    }
    get channelPost(): Message | null {
        return this._channelPost;
    }
    get editedChannelPost(): Message | null {
        return this._editedChannelPost;
    }
    get inlineQuery(): InlineQuery | null {
        return this._inlineQuery;
    }
    get chosenInlineResult(): ChosenInlineResult | null {
        return this._chosenInlineResult;
    }
    get callbackQuery(): CallbackQuery | null {
        return this._callbackQuery;
    }
    get shippingQuery(): ShippingQuery | null {
        return this._shippingQuery;
    }
    get preCheckoutQuery(): PreCheckoutQuery | null {
        return this._preCheckoutQuery;
    }
    get poll(): Poll | null {
        return this._poll;
    }
    get pollAnswer(): PollAnswer | null {
        return this._pollAnswer;
    }
}

export default Update;