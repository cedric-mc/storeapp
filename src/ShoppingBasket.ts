import {ShippingAddress} from "./ShippingAddress";

export type StoreItemReference = string;

export interface ShoppingBasket {
    addSamples(item: StoreItemReference, n: number): ShoppingBasket // to add n samples (n can be negative)
    removeItem(item: StoreItemReference): ShoppingBasket // to remove the item from the basket
    clear(): ShoppingBasket // to remove all the items from the basket
    getSamples(item: StoreItemReference) : number // return the number of samples for this reference
    getAllItems(): [StoreItemReference, number][] // return all the items in the basket with the number of samples
    getPrice(item: StoreItemReference): number // return the price of the item
    computeOrderAmount(): number // return the total amount of the order
    address: ShippingAddress; // the address where the order will be shipped
}