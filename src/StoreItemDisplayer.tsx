import { StoreItem } from "./StoreItem";
import './StoreItemDisplayer.css';

export const StoreItemDisplayer = (props: { item: StoreItem }) => {
    const item = props.item;
    return (
        <div className="storeItem">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            {
                item.discount !== undefined ? <p className="discount">{(item.price * (1 - item.discount)).toFixed(2) + " €"}</p> : <p>{item.price.toFixed(2) + " €"}</p>
            }
            {item.discount !== undefined ? <div>Discount!</div> : <div>Normal price!</div>}
            {item.picture !== undefined ? <img className="storeItemPicture" src={item.picture} alt="Beautiful picture of the item" /> : <div className="storeItemPicture">No picture available</div>}
        </div>
    );
}

export default StoreItemDisplayer;