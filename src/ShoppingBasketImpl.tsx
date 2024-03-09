import { ShoppingBasket, StoreItemReference } from './ShoppingBasket';

export class ShoppingBasketImpl implements ShoppingBasket {
    private items: Map<StoreItemReference, number>;

    constructor() {
        this.items = new Map<StoreItemReference, number>();
    }

    addSamples(item: string, n: number): ShoppingBasket {
        const currentCount = this.items.get(item) || 0;
        this.items.set(item, currentCount + n);
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