export enum Description {
    OK,
    OK_BUT_INVALID_CODE,
    EMAIL_IN_USE,
}

export class InsertionResult {

    success: boolean;
    description: Description;
    _id: string;
}