import ViewMoreButton from '../viewMoreButton/viewMoreButton';
import './itemFrame.css'
import '../../images/iphone5.jpg'


export default function ItemFrame(props) {
    
    return (
        <div className="itemFrame">
            <h2 className='itemTitle'>{props.item.model}</h2>
            <img className='picture' src={props.picture} alt="phone" />
            <p className="description">{props.item.description}</p>
            <div className="priceDiv">
                <span className='boldText'>Price:</span>
                <span>{props.item.price} $</span>
            </div>
            <ViewMoreButton link={`/item/${props.item.id}`}/>
        </div>
    );
}
