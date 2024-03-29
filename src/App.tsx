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
        basket.saveBasket();
    }, [basket]);

    // Chargement de l'inventaire, et restauration du panier depuis le local storage
    useEffect(() => {
        setInventory(inventoryFile);
        basket.loadBasket();
    }, [basket, setInventory]);

    return (
        <div className="bodyStore">
            <h1 className="title">Une boutique réactionnelle</h1>
            <StoreItemGrid inventory={inventory} onAddToBasket={addToBasket} />
            <ShoppingBasketManager basket={basket} inventory={inventory} onClearBasket={clearBasket} />
        </div>
    );
}

export default App;
