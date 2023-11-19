import './applyButton.css';
import {useContext} from "react";
import {PhoneListContext} from "../../contexts/phoneList";
import {PhoneContext} from "../../contexts/phoneContext";
import {api} from "../../api";


export default function ApplyButton() {
    let [phoneList, setPhoneList] = useContext(PhoneListContext);

    return (
        <button onClick={() => {
            let companyFilterOption = parseInt(document.getElementById("companyFilter").value);
            let priceFilterOption = parseInt(document.getElementById("priceFilter").value);
            api.get(`/filter/${companyFilterOption}/${priceFilterOption}`).then(res => {
                setPhoneList(res.data);
            });
        }} className='applyButton'>Apply</button>
    );
}