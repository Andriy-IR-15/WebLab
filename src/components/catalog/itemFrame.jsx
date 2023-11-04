import ViewMoreButton from '../viewMoreButton/viewMoreButton';
import './itemFrame.css'


export default function ItemFrame(props) {
    
    return (
        <div className="itemFrame">
            <p className='itemTitle'>{props.item.model}</p>
            <img className='picture' src={props.picture} alt="phone" />
            <h2 className='itemName'>{props.item.name}</h2>
            <p className="description">{props.item.description}</p>
            <div className="priceDiv">
                <span className='boldText'>Price:</span>
                <span>{props.item.price} $</span>
            </div>
            <ViewMoreButton link={`/item/${props.item.id}`}/>
        </div>
    );
}
