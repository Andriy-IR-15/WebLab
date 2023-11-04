import './select.css';


export default function Select(props) {
    return (
        <select>
            <option value="" disabled selected>{props.filterBy} filter</option>
            <option value={props.category[0]}>{props.category[0]}</option>
            <option value={props.category[1]}>{props.category[1]}</option>
            <option value={props.category[2]}>{props.category[2]}</option>
        </select>
    );
}