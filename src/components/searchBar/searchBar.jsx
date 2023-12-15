import './searchBar.css';
import {useContext} from "react";
import {PhoneListContext} from "../../contexts/phoneList";


export default function SearchBar() {
    let [phoneList, setPhoneList, phones] = useContext(PhoneListContext);
    return (
        <input onChange={() => {
            let text = document.getElementById("searchBar").value;
            phones = phones.filter((phone) => phone.model.search(text) !== -1);
            setPhoneList(phones);
        }}
            type="text" id="searchBar" className='searchBar' />
    );
}