import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import './header.css'

export default function PagesChoice(props) {
    let where = props.chosen;
    let homeChosen = where.localeCompare('home') ? 'notchosen' : 'chosen';
    let catalogChosen = where.localeCompare('catalog') * where.localeCompare('item') ? 'notchosen' : 'chosen';
    let cartChosen = where.localeCompare('cart') ? 'notchosen' : 'chosen';
    return (
        <ul className="pagesChoice">
            <li className={homeChosen}><Link to="/">Home</Link></li>
            <li className={catalogChosen}><Link to="/catalog">Catalog</Link></li>
            <li className={cartChosen}><Link to="/cart">Cart</Link></li>
        </ul>
    );
}