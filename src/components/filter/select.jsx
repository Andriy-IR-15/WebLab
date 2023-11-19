import './select.css';


export default function Select(props) {
    return (
        <select id={props.id}>
            <option value={-1} selected>{props.filterBy} filter</option>
            <option value={0}>{props.category[0]}</option>
            <option value={1}>{props.category[1]}</option>
            <option value={2}>{props.category[2]}</option>
        </select>
    );
}