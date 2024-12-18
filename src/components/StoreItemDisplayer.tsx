import { StoreItem } from "../StoreItem";
import '../style/StoreItemDisplayer.css';

interface StoreItemDisplayerProps {
    item: StoreItem;
    onAddToBasket: (item: StoreItem) => void;
}

const StoreItemDisplayer = (props: StoreItemDisplayerProps) => {
    const item = props.item;
    const onAddToBasket = props.onAddToBasket;
    return (
        <div className="storeItem">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            {
                item.discount !== undefined ? <p className="discount">{(item.price * (1 - item.discount)).toFixed(2) + " €"}</p> : <p>{item.price.toFixed(2) + " €"}</p>
            }
            {item.discount !== undefined ? (
                <div>Discount!</div>
                ) : (
                    <div>Normal price!</div>
                )}
            {item.picture !== undefined ? (
                <img className="storeItemPicture" src={item.picture} alt={item.name} />
            ) : (
                <div className="storeItemPicture">No picture available</div>
            )}
            <br />
            <button className="addItemButton" onClick={() => onAddToBasket(item)}>Ajouter au panier</button>
        </div>
    );
}

export default StoreItemDisplayer;