import React, { useCallback, useEffect, useState } from 'react';
import './style/App.css';
import StoreItemGrid from './components/StoreItemGrid';
import { ShoppingBasketImpl } from './components/ShoppingBasketImpl';
import { StoreItem } from './StoreItem';
import { ShoppingBasketManager } from './components/ShoppingBasketManager';
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
        setInventory(inventoryFile);
        basket.loadBasket();

        return () => {
            basket.saveBasket();
        };
    }, [basket]);

    useEffect(() => {
        basket.saveBasket();
    }, [basket]);

    return (
        <div className="bodyStore">
            <h1 className="title">Une boutique réactionnelle</h1>
            <StoreItemGrid inventory={inventory} onAddToBasket={addToBasket} />
            <ShoppingBasketManager basket={basket} inventory={inventory} onClearBasket={clearBasket} />
        </div>
    );
}

export default App;
