import { Fragment, useState } from "react";
import "./Filter.scss";
import axios from "axios";

function Filter({ sendDataToParent }) {
    const [memoryValue, setMemoryValue] = useState("Memory");
    const [companyValue, setCompanyValue] = useState("Company");
    const [card, setCard] = useState([]);

    const filterCard = (event) => {
        axios.get("http://localhost:8090/phones").then((response) => {
            setCard(response.data)
        });
        event.preventDefault();
        let findCard = card;
        let left = parseInt(memoryValue.toString().split(",")[0]);
        let right = parseInt(memoryValue.toString().split(",")[1]);
        if (memoryValue !== "Memory" && companyValue === "Company") { findCard = card.filter((el) => el.memoryCapacity >= left && el.memoryCapacity <= right) }
        if (memoryValue === "Memory" && companyValue !== "Company") { findCard = card.filter((el) => el.nameOfManufacturer === companyValue) }
        if (memoryValue !== "Memory" && companyValue !== "Company") { findCard = card.filter((el) => el.memoryCapacity >= left && el.memoryCapacity <= right && el.nameOfManufacturer === companyValue) } 
        sendDataToParent(findCard);
    }

    return (
        <Fragment>
            <form>
                <div>
                    <select onChange={(event) => { setMemoryValue(event.target.value) }}>
                        <option multiple={true} value={"Memory"}>Memory</option>
                        <option multiple={true} value={["32", "64"]}>From 32 to 64</option>
                        <option multiple={true} value={["64", "128"]}>From 64 to 128</option>
                        <option multiple={true} value={["128", "512"]}>From 128 Gb...</option>
                    </select>
                    <select onChange={(event) => { setCompanyValue(event.target.value) }}>
                        <option value={"Company"}>Company</option>
                        <option value={"Iphone"}>Iphone</option>
                        <option value={"Xiaomi"}>Xiaomi</option>
                        <option value={"Pixel"}>Pixel</option>
                    </select>
                </div>
                <button type="submit" onClick={filterCard}>Apply</button>
            </form>
        </Fragment>
    )
}

export default Filter;