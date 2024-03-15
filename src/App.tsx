import React from 'react';
import './style/App.css';
import StoreItemGrid from './StoreItemGrid';
import { ShoppingBasketImpl } from './ShoppingBasketImpl';
import { StoreItem } from './StoreItem';
import { ShoppingBasketManager } from './ShoppingBasketManager';
import inventoryFile from './inventory.json';

function App() {
    const [basket, setBasket] = React.useState(new ShoppingBasketImpl());
    const [inventory] = React.useState<StoreItem[]>(inventoryFile as StoreItem[]);

    const addToBasket = (item: StoreItem) => {
        setBasket(b => {
            const newBasket = b.addSamples(item.name, 1) as ShoppingBasketImpl;
            newBasket.saveBasket();
            return newBasket;
        });
    };

    const clearBasket = () => {
        setBasket(new ShoppingBasketImpl());
    };

    // Chargement du panier
    React.useEffect(() => {
        setBasket(b => b.loadBasket() as ShoppingBasketImpl);
    }, []);

    // Chargement du panier
    React.useEffect(() => {
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
