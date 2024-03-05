import React from 'react';
import './App.css';
import StoreItemGrid from './StoreItemGrid';
import { ShoppingBasketImpl } from './ShoppingBasketImpl';
import { StoreItem } from './StoreItem';
import { ShoppingBasketManager } from './ShoppingBasketManager';

function App() {
    const [basket, setBasket] = React.useState(new ShoppingBasketImpl());
    const [inventory, setInventory] = React.useState<StoreItem[]>([]);

    const handleAddToBasket = (item: StoreItem) => {
        setBasket(b => b.addSamples(item.id, 1) as ShoppingBasketImpl);
    };

    const handleClearBasket = () => {
        setBasket(b => b.clear() as ShoppingBasketImpl);
    };

    return (
        <div className="bodyStore">
            <h1 className="title">Une boutique réactionnelle</h1>
            <StoreItemGrid inventory={inventory} onAddToBasket={handleAddToBasket} />
            <ShoppingBasketManager basket={basket} inventory={inventory} onClearBasket={handleClearBasket} />
        </div>
    );
}

export default App;
