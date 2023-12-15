import {
    Link
} from "react-router-dom";
import './viewMoreButton.css'


export default function ViewMoreButton(props) {
    return (
        <Link to={props.link}>
            <button className='viewMoreButton' onClick={props.onClick}>View more</button>
        </Link>
    );
}