import PassportElementError from '../entities/passport_element_error';

class SetPassportDataErrorsParam {
    private _userId: number;
    private _errors: PassportElementError[];

    constructor(params: {
        userId: number;
        errors: PassportElementError[];
    }) {
        this._userId = params.userId;
        this._errors = params.errors;
    }

    get userId(): number {
        return this._userId;
    }
    get errors(): PassportElementError[] {
        return this._errors;
    }
}

export default SetPassportDataErrorsParam;