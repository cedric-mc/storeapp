import { ShoppingBasket, StoreItemReference } from './ShoppingBasket';

export class ShoppingBasketImpl implements ShoppingBasket {
    private items: Map<StoreItemReference, number>;

    constructor() {
        this.items = new Map<StoreItemReference, number>();
    }

    addSamples(item: string, n: number): ShoppingBasket {
        throw new Error('Method not implemented.');
    }

    clear(): ShoppingBasket {
        throw new Error('Method not implemented.');
    }

    getSamples(item: string): number {
        throw new Error('Method not implemented.');
    }
    
    getAllItems(): [string, number][] {
        throw new Error('Method not implemented.');
    }

    addItem(item: StoreItemReference): ShoppingBasket {
        const count = this.items.get(item) || 0;
        this.items.set(item, count + 1);
        return new ShoppingBasketImpl();
    }

    removeItem(item: StoreItemReference): ShoppingBasket {
        this.items.delete(item);
        return new ShoppingBasketImpl();
    }

    updateQuantity(item: StoreItemReference, quantity: number): ShoppingBasket {
        this.items.set(item, quantity);
        return new ShoppingBasketImpl();
    }

    getItems(): Map<StoreItemReference, number> {
        return this.items;
    }
}