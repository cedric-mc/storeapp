import React from "react";
import StoreItemDisplayer from "./StoreItemDisplayer";
import "./StoreItemGrid.css";
import inventory from "./inventory.json";

const StoreItemGrid = ({}) => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const filteredItems = inventory.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="storeItemGrid">
            <input type="text" value={searchTerm} onChange={event =>
                setSearchTerm(event.target.value)} />
            <div className="grid">
                {filteredItems.map((item, index) =>
                    <StoreItemDisplayer item={item} key={index} />
                )}
            </div>
        </div>
    );
};

export default StoreItemGrid;