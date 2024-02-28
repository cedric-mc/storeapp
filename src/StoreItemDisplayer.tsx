import { StoreItem } from "./StoreItem";
import './StoreItemDisplayer.css';

export const StoreItemDisplayer = (props: { item: StoreItem }) => {
    const item = props.item;
    return (
        <div className="storeItem">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            {
                item.discount !== undefined ? <p className="discount">{(item.price * item.discount).toFixed(2) + " €"}</p> : <p>{item.price.toFixed(2) + " €"}</p>
            }
            {item.discount !== undefined ? <div>Discount!</div> : <div>Normal price!</div>}
            {item.discount && <p className="discount">{item.discount.toFixed(2)}</p>}
        </div>
    );
}

export default StoreItemDisplayer;