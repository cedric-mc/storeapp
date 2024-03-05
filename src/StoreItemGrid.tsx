import React from "react";
import StoreItemDisplayer from "./StoreItemDisplayer";
import "./style/StoreItemGrid.css";
import { StoreItem } from "./StoreItem";

interface StoreItemGridProps {
    inventory: StoreItem[];
    onAddToBasket: (item: StoreItem) => void;
}

const StoreItemGrid: React.FC<StoreItemGridProps> = ({ inventory, onAddToBasket }) => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }
    const filteredItems = inventory.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="storeItemGrid">
            <input type="text" value={searchTerm} onChange={handleSearch} />
            <div className="grid">
                {filteredItems.map((item, index) =>
                    <StoreItemDisplayer item={item} key={index} onAddToBasket={onAddToBasket} />
                )}
            </div>
        </div>
    );
};

export default StoreItemGrid;