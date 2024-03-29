import React, { useCallback, useEffect, useState } from 'react';
import './style/App.css';
import StoreItemGrid from './StoreItemGrid';
import { ShoppingBasketImpl } from './ShoppingBasketImpl';
import { StoreItem } from './StoreItem';
import { ShoppingBasketManager } from './ShoppingBasketManager';
import inventoryFile from './inventory.json';

function App() {
    const [basket, setBasket] = useState(new ShoppingBasketImpl());
    const [inventory, setInventory] = useState<StoreItem[]>([]);

    const addToBasket = useCallback((item: StoreItem) => {
        console.log(`Adding ${item.name} to basket`);
        setBasket(prevBasket => {
            const newBasket = prevBasket.addSamples(item.name, 1) as ShoppingBasketImpl;
            newBasket.saveBasket();
            return newBasket;
        });
    }, [setBasket]);

    const clearBasket = useCallback(() => {
        setBasket(b => {
            const newBasket = b.clear() as ShoppingBasketImpl;
            newBasket.saveBasket();
            return newBasket;
        });
    }, [setBasket]);

    useEffect(() => {
        // Load the inventory when the component is mounted
        setInventory(inventoryFile);
        // Load the basket when the component is mounted
        basket.loadBasket();

        // Save the basket when the component is unmounted
        return () => {
            basket.saveBasket();
        };
    }, [basket]); // Run only on mount and unmount

    useEffect(() => {
        // Save the basket whenever it changes
        basket.saveBasket();
    }, [basket]); // Run whenever `basket` changes

    return (
        <div className="bodyStore">
            <h1 className="title">Une boutique réactionnelle</h1>
            <StoreItemGrid inventory={inventory} onAddToBasket={addToBasket} />
            <ShoppingBasketManager basket={basket} inventory={inventory} onClearBasket={clearBasket} />
        </div>
    );
}

export default App;
