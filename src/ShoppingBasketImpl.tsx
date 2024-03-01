import { ShoppingBasket, StoreItemReference } from './ShoppingBasket';

export class ShoppingBasketImpl implements ShoppingBasket {
    private items: Map<StoreItemReference, number>;

    constructor() {
        this.items = new Map<StoreItemReference, number>();
    }
    addSamples(item: string, n: number): ShoppingBasket {
        this.items.set(item, (this.items.get(item) || 0) + n);
        return this;
    }
    removeItem(item: string): ShoppingBasket {
        this.items.delete(item);
        return this;
    }
    clear(): ShoppingBasket {
        this.items.clear();
        return this;
    }
    getSamples(item: string): number {
        return this.items.get(item) || 0;
    }
    getAllItems(): [string, number][] {
        return Array.from(this.items.entries());
    }  
}