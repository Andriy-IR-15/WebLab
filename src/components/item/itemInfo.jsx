import {
    Link
} from "react-router-dom";

import styles from './item.module.css';
import {useContext, useState} from "react";
import pixel5 from "../../images/pixel5.jpg";
import iphone5 from "../../images/iphone5.jpg";
import motog4 from "../../images/motog4.jpg";


export default function ItemInfo(props) {
    let pictures = [pixel5, iphone5, motog4]
    const [count, setCount] = useState(1);

    return (
        <>
            <div className={styles.itemInfoDiv}>
                <img className={styles.phonePicture} src={pictures[props.phone.id]} alt="phone" />
                <div>
                    <div className={styles.characteristics}>
                        <span className={styles.characteristic}>With headphones as a gift</span>
                        <span className={styles.characteristic}>3 year warranty</span>
                    </div>
                    <h1>{props.phone.model}</h1>
                    <p>{props.phone.description}</p>
                    <div className={styles.fields}>
                        <div className={styles.selectDiv}>
                            <p className={styles.paragraph}>Number of phones:</p>
                            <input onChange={() => setCount(parseInt(document.getElementById("count").value))}
                                id="count" type="number" min={1} defaultValue={1} className={styles.numberInput}/>
                        </div>
                        <div className={styles.selectDiv}>
                            <p className={styles.paragraph}>With case:</p>
                            <select className={styles.select}>
                                <option value="">Yes</option>
                                <option value="">No</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.purchaseDiv}>
                <span className={styles.priceTag}>Price: ${props.phone.price * count}</span>
                <Link to="/catalog">
                    <button className={styles.backButton}>Go back</button>
                </Link>
                <button className={styles.addToCartButton}>Add to cart</button>
            </div>
        </>
    );
}