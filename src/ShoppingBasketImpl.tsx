import { ShoppingBasket, StoreItemReference } from './ShoppingBasket';

export class ShoppingBasketImpl implements ShoppingBasket {
    private items: Map<StoreItemReference, number>;

    constructor() {
        this.items = new Map<StoreItemReference, number>();
    }

    addSamples(item: StoreItemReference, n: number): ShoppingBasket {
        const currentQuantity = this.items.get(item) || 0;
        const newQuantity = currentQuantity + n;
        if (newQuantity <= 0) {
            this.items.delete(item);
        } else {
            this.items.set(item, newQuantity);
        }
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

    saveBasket(): void {
        localStorage.setItem("basket", JSON.stringify(Array.from(this.items.entries())));
    }

    loadBasket(): ShoppingBasket {
        try {
            const loadedItems = JSON.parse(localStorage.getItem("basket") || "[]");
            this.items = new Map(loadedItems);
        } catch (error) {
            console.warn("Failed to load basket from local storage.", error);
            this.items = new Map();
        }
        return this;
    }
}