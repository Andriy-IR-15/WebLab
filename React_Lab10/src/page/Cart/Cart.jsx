import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SellCard from "../../components/SellCard/SellCard";
import './Cart.scss'

function Cart() {
    const card = useSelector(state => state.product.cart)

    const navigation = useNavigate();

    const goBack = () => {
        navigation(-1)
    }

    const totalPrice = () => {
        let total = 0
        card.map((el) => total += el.price * el.quantity)
        return total
    }

    return (
        <div className="Cart">
            {card.map((el) => {
                return <SellCard
                    key={el.id}
                    count={el.quantity}
                    id={el.id}
                    price={el.price} />
            })}
            <p className="total-price"> Total price: {totalPrice()} $</p>
            <div className="button">
                <button className="back" onClick={goBack}> Back to Catalog </button>
                <button className="continue"> Continue</button>
            </div>
        </div>
    )
}

export default Cart;