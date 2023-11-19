import ItemFrame from './itemFrame';
import './itemsContainer.css';
import iphone5 from '../../images/iphone5.jpg';
import motog4 from '../../images/motog4.jpg';
import pixel5 from '../../images/pixel5.jpg';
import {useContext} from "react";
import {PhoneListContext} from "../../contexts/phoneList";


export default function ItemsContainer() {
    let pictures = [pixel5, iphone5, motog4]
    let phones = useContext(PhoneListContext)[0];
    let itemsList = phones.map((phone) =>
        <ItemFrame key={phone.id} item={phone} picture={pictures[phone.id % 3]}/>
    );

    return (
        <ul className='itemsList'>
            {itemsList}
        </ul>
    );
}
