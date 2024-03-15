import React from 'react';
import { ShoppingBasket } from './ShoppingBasket';
import { StoreItem } from './StoreItem';
import './style/ShoppingBasketManager.css';

interface ShoppingBasketManagerProps {
    basket: ShoppingBasket;
    inventory: StoreItem[];
    onClearBasket: () => void;
}

export const ShoppingBasketManager: React.FC<ShoppingBasketManagerProps> = ({ basket, inventory, onClearBasket }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Quantité</th>
                    <th>Nom de l'article</th>
                    <th>Prix unitaire</th>
                    <th>Prix total</th>
                </tr>
            </thead>
            <tbody>
                {basket.getAllItems().map(([item, quantity]) => {
                    const storeItem = inventory.find((product) => product.name === item);
                    if (storeItem) {
                        return (
                            <tr key={item}>
                                <td>{quantity}</td>
                                <td>{item}</td>
                                <td>€{storeItem.price.toFixed(2)}</td>
                                <td>€{(storeItem.price * quantity).toFixed(2)}</td>
                            </tr>
                        );
                    }
                    return null;
                })}
            </tbody>
            <button className="clearButton" onClick={onClearBasket}>Réinitialiser le panier</button>
        </table>
    );
};