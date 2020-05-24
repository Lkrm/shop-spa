import { createActions } from 'redux-actions';

import { Schema } from 'normalizr';
import { StoreEnums } from '../enums';

export type ApiMethod = StoreEnums.ApiMethods;

interface RequestActionCallbacksSignature {
    success?: (data: any) => void,
    error?: (error: any) => void,
    finally?: () => void,
}

export interface RequestActionActionsSignature {
    success?: (data: any) => void,
    error?: (error: any) => void,
    finally?: () => void,
}

export interface RequestActionSignature {
    route: string,
    method: ApiMethod,
    selector: string,
    callbacks?: RequestActionCallbacksSignature,
    actions?: RequestActionActionsSignature,
    params?: any,
    meta?: any,
    normalize?: {
        pathToData?: Array<string | number>,
        schema?: Schema<any>,
    }
}


interface MapActions {
    [propName: string]: (data: any) => RequestActionSignature
}

export const createActionsTS = (mapActions: MapActions,
  ...actions: any) => createActions(mapActions, ...actions);
