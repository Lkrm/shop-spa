import { ID } from './common';

export interface ProductOption {
    title: string,
    value: string | Array<any> | number | boolean,
}

export interface ProductSignature {
    id: ID,
    image: ID,
    price: number,
    sale: number,
    title: string,
    description: string,
    options: Array<ProductOption>
}
