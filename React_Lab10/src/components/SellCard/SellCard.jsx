import './SellCard.scss'
import camera from '../../assert/img/img.svg'
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity } from '../../store/slice';

function SellCard ({count, id, price}) {
    const dispatch = useDispatch()

    return (
        <div className='SellCard'>
            <div className='title'>
                <img src={camera} alt={'Camera'}/>
                <p>Some text</p>
            </div>
            <div className='count'>
                <span onClick={() => dispatch(incrementQuantity(id))}> + </span>
                <p> { count} </p>
                <span onClick={() => dispatch(decrementQuantity(id))}> - </span>
            </div>
            <span className='price'> {price} $</span>
        </div>
    )
}

export default SellCard;