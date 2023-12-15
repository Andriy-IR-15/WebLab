import './SellCard.scss';
import phone from '../../assert/img/img.svg';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeItem } from '../../store/slice';

function SellCard({ count, id, price }) {
    const dispatch = useDispatch();

    const handleDecrement = () => {
        if (count === 1) {
            dispatch(removeItem(id));
        } else {
            dispatch(decrementQuantity(id));
        }
    }

    return (
        <div className='SellCard'>
            <div className='title'>
                <img src={phone} alt={'Phone'} />
                <p>Some text</p>
            </div>
            <div className='count'>
                <span onClick={() => dispatch(incrementQuantity(id))}> + </span>
                <p> {count} </p>
                <span onClick={handleDecrement}> - </span>
            </div>
            <span className='price'> {price} $</span>
        </div>
    );
}

export default SellCard;
