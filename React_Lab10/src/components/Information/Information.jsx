import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import img from "../../assert/img/img.svg";
import { useCurrency } from "../../jsx/Context";
import { addToCart } from "../../store/slice";
import './Information.scss';


function Information() {
    const navigation = useNavigate();
    const [card, setCard] = useState(useCurrency())
    const dispatch = useDispatch()
    const goBack = () => {
        navigation(-1)
    }

    const addElementToCart = () => {
        let id = parseInt(window.location.pathname.split(/.catalog./)[1]) - 1
        dispatch(addToCart(card[id]))
    }

    return (
        <main className="Information">
            <div className="main">
                <img src={img} alt="img for phone" />
                <div className="textInformation">
                    <div className="textInformation--characteristic">
                        <h3 className="textInformation--characteristic--1">1 characteristic</h3>
                        <h3 className="textInformation--characteristic--2">2 characteristic</h3>
                    </div>
                    <div className="textInformation--main">
                        <h1>Title</h1>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut
                            commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat </span>
                    </div>
                    <div className="InformationInput">
                        <div>
                            <label htmlFor="brand">Brand</label>
                            <select name="brand" id="brand">
                                <option value="Iphone">Iphone</option>
                                <option value="xiaomi">Xiaomi</option>
                                <option value="Pixel">Pixel</option>
                            </select>
                        </div>
                        <div>
                            <label>Memory</label>
                            <select name="Memory" id="Memory">
                                <option value="32 Gb">32 Gb</option>
                                <option value="64 Gb">64 Gb</option>
                                <option value="128 Gb">128 Gb</option>
                                <option value="256 Gb">256 Gb</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Navigation">
                <p>Price: error 444! You can see price in cart!</p>
                <div>
                    <button onClick={goBack}>Go Back</button>
                    <button style={{ color: 'white', background: 'black' }} onClick={addElementToCart}>Add Card</button>
                </div>
            </div>

        </main>
    )
}

export default Information;