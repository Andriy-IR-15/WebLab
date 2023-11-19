import Filter from "../filter/filter";
import Footer from "../footer/footer";
import Header from "../header/header";
import ItemsContainer from "./itemsContainer";
import {PhoneListContext} from "../../contexts/phoneList";
import {useContext, useEffect, useState} from "react";
import {PhoneContext} from "../../contexts/phoneContext";
import { api } from "../../api";
import Loader from "../loader/loader";


export default function Catalog() {
    const [phones, setPhones] = useState([]);
    const [phoneList, setPhonesList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        api.get().then(res => {
            setPhones(res.data);
            setPhonesList(res.data);
        });
    }, []);

    setTimeout(() => {
        setLoading(false);
    }, 1000);

    return (
        <PhoneListContext.Provider value={[phoneList, setPhonesList, phones]}>
            <Header/>
            <Filter/>
            {loading ? <Loader/> : <ItemsContainer/>}
            <Footer/>
        </PhoneListContext.Provider>
    );
}