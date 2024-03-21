import { ShoppingBasket, StoreItemReference } from './ShoppingBasket';
import inventory from './inventory.json';

export class ShoppingBasketImpl implements ShoppingBasket {
    private basket: Map<StoreItemReference, number> = new Map();

    addSamples(item: StoreItemReference, n: number): ShoppingBasket {
        const currentQuantity = this.basket.get(item) || 0;
        this.basket.set(item, currentQuantity + n);
        return new ShoppingBasketImpl(this.basket);
    }

    removeItem(item: string): ShoppingBasket {
        this.basket.delete(item);
        return new ShoppingBasketImpl(this.basket);
    }

    clear(): ShoppingBasket {
        this.basket.clear();
        return new ShoppingBasketImpl(this.basket);
    }

    getSamples(item: string): number {
        return this.basket.get(item) || 0;
    }

    getAllItems(): [string, number][] {
        return Array.from(this.basket.entries());
    }

    constructor(initialItems?: Map<StoreItemReference, number>) {
        if (initialItems) {
            this.basket = new Map(initialItems);
        }
    }

    saveBasket(): void {
        try {
            localStorage.setItem("basket", JSON.stringify(Array.from(this.basket.entries())));
        } catch (error) {
            console.warn("Failed to save basket to local storage.", error);
        }
    }

    loadBasket(): ShoppingBasket {
        try {
            const loadedItems = localStorage.getItem("basket");
            if (loadedItems) {
                const parsedItems: [StoreItemReference, number][] = JSON.parse(loadedItems);
                this.basket = new Map(parsedItems);
            }
        } catch (error) {
            console.warn("Failed to load basket from local storage.", error);
        }
        return this;
    }

    getPrice(item: string): number {
        return 0;
    }

    computeOrderAmount(): number {
        let totalAmount = 0;
        Array.from(this.basket.entries()).forEach(([item, quantity]) => {
            const storeItem = inventory.find(item => item.id === item.id);
            if (storeItem) {
                totalAmount += storeItem.price * quantity;
            }
        });
        return totalAmount;
    }
}