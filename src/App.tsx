import React, { useState } from 'react';
import './App.css';
import StoreItemDisplayer from './StoreItemDisplayer';
import inventory from './inventory.json';

function App() {
    const [storeItem, setStoreItem] = useState(0);
    const item = inventory[storeItem];

    return (
        <div className="bodyStore">
            <h1 className="title">Une boutique réactionnelle</h1>
            <input className="inputStoreItem" type="range" min="0" max={ inventory.length -1 } value={storeItem} onChange={event =>
                setStoreItem(parseInt(event.target.value))} />
            <div className="storeItemDisplayer">
                <StoreItemDisplayer item={item} />
            </div>
        </div>
    );
}

export default App;
