import { StoreEnums } from '../enums';

export type ApiMethod = StoreEnums.ApiMethods;

export interface RequestActionSignature {
    route: string,
    method: ApiMethod,
    selector: string,
    callbacks: {
        success: (data: any) => void,
        error: (error: any) => void,
        finally: (data: any) => void,
    },
    actions: {
        success: (data: any) => void,
        error: (error: any) => void,
        finally: (data: any) => void,
    },
    params: any,
    meta: any,
}


export interface MapActions {
    [propName: string]: () => RequestActionSignature
}
