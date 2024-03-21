import { ShoppingBasket, StoreItemReference } from './ShoppingBasket';
import inventory from './inventory.json';

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
        try {
            localStorage.setItem("basket", JSON.stringify(Array.from(this.items.entries())));
        } catch (error) {
            console.warn("Failed to save basket to local storage.", error);
        }
    }

    loadBasket(): ShoppingBasket {
        try {
            const loadedItems = localStorage.getItem("basket");
            if (loadedItems) {
                const parsedItems: 
            }
            const loadedItems = JSON.parse(localStorage.getItem("basket") || "[]");
            this.items = new Map(loadedItems);
        } catch (error) {
            console.warn("Failed to load basket from local storage.", error);
            this.items = new Map();
        }
        return this;
    }

    getPrice(item: string): number {
        return 0;
    }

    computeOrderAmount(): number {
        let totalAmount = 0;
        Array.from(this.items.entries()).forEach(([item, quantity]) => {
            const storeItem = inventory.find(item => item.id === item.id);
            if (storeItem) {
                totalAmount += storeItem.price * quantity;
            }
        });
        return totalAmount;
    }
}