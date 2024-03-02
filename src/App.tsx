import React from 'react';
import './App.css';
import StoreItemGrid from './StoreItemGrid';
import { ShoppingBasketImpl } from './ShoppingBasketImpl';
import { StoreItem } from './StoreItem';
import { ShoppingBasketManager } from './ShoppingBasketManager';

function App() {
    const [basket, setBasket] = React.useState(new ShoppingBasketImpl());
    const [inventory, setInventory] = React.useState<StoreItem[]>([]);    

    // Ajoutez à la main quelques items dans le panier
    React.useEffect(() => {
        const item1: StoreItem = { id: '1', name: 'Article 1', price: 10, description: '' };
        const item2: StoreItem = { id: '2', name: 'Article 2', price: 20, description: '' };

        setInventory([item1, item2]);

        basket.addSamples(item1.id, 2);
        basket.addSamples(item2.id, 3);

        setBasket(basket);
    }, []);

    return (
        <div className="bodyStore">
            <h1 className="title">Une boutique réactionnelle</h1>
            <ShoppingBasketManager basket={basket} inventory={inventory} />
            <StoreItemGrid />
        </div>
    );
}

export default App;
