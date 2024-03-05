import React from 'react';
import './style/App.css';
import StoreItemGrid from './StoreItemGrid';
import { ShoppingBasketImpl } from './ShoppingBasketImpl';
import { StoreItem } from './StoreItem';
import { ShoppingBasketManager } from './ShoppingBasketManager';
import inventoryFile from './inventory.json';

function App() {
    const [basket, setBasket] = React.useState(new ShoppingBasketImpl());
    const [inventory, setInventory] = React.useState<StoreItem[]>([]);

    // Handler pour ajouter un article au panier
    const handleAddToBasket = (item: StoreItem) => {
        setBasket(b => b.addSamples(item.id, 1) as ShoppingBasketImpl);
    };

    // Handler pour vider le panier
    const handleClearBasket = () => {
        setBasket(b => b.clear() as ShoppingBasketImpl);
    };

    // Chargement du panier
    React.useEffect(() => {
        setBasket(b => b.loadBasket() as ShoppingBasketImpl);
    }, []);

    // Chargement du panier
    React.useEffect(() => {
        basket.saveBasket();
    }, [basket]);

    // Chargement de l'inventaire
    React.useEffect(() => {
        setInventory(inventoryFile as StoreItem[]);
    }, []);

    return (
        <div className="bodyStore">
            <h1 className="title">Une boutique réactionnelle</h1>
            <StoreItemGrid inventory={inventory} onAddToBasket={handleAddToBasket} />
            <ShoppingBasketManager basket={basket} inventory={inventory} onClearBasket={handleClearBasket} />
        </div>
    );
}

export default App;
