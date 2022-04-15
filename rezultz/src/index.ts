export enum RezultType {
    Success = 0,
    Error = 1,
    Warning = 2
}

export type RezultError = {
    type: RezultType.Error,
    message: string,
    [key: string]: any
}

export type RezultSuccess<T=void> = {
    type: RezultType.Success,
    value: T,
    [key: string]: any
}

export type RezultWarning<T=void> = {
    type: RezultType.Warning,
    value: T,
    message: string
}

export type Rezult<T> = RezultSuccess<T> | RezultError | RezultWarning