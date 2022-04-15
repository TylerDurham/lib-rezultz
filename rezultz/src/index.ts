export enum RezultzType {
    Success = 0,
    Error = 1,
    Warning = 2
}

export type RezultzError = {
    type: RezultzType.Error,
    message: string,
    [key: string]: any
}

export type RezultzSuccess<T=void> = {
    type: RezultzType.Success,
    value: T,
    [key: string]: any
}

export type RezultzWarning<T=void> = {
    type: RezultzType.Warning,
    value: T,
    message: string
}

export type Rezultz<T> = RezultzSuccess<T> | RezultzError | RezultzWarning;

