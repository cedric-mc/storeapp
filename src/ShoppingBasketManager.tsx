import React from 'react';
import { ShoppingBasket } from './ShoppingBasket';
import { StoreItem } from './StoreItem';

interface ShoppingBasketManagerProps {
    basket: ShoppingBasket;
    inventory: StoreItem[];
}

export const ShoppingBasketManager: React.FC<ShoppingBasketManagerProps> = ({ basket, inventory }) => {
    const items = basket.getAllItems();

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
                {Array.from(items.entries()).map(([itemReference, quantity]) => {
                    const item = inventory.find(i => i.id === String(itemReference));
                    if (!item) return null;

                    return (
                        <tr key={itemReference}>
                            <td>{quantity}</td>
                            <td>{item.name}</td>
                            <td>{Number(item.price) * Number(quantity)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};