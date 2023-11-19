import {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import './item.module.css';
import ItemInfo from './itemInfo';
import {api} from "../../api";
import iphone5 from '../../images/iphone5.jpg';
import motog4 from '../../images/motog4.jpg';
import pixel5 from '../../images/pixel5.jpg';


export default function Item() {
    let { id } = useParams();
    id = parseInt(id);
    let [phone, setPhone] = useState({});
    useEffect(() => {
        api.get(`/${id}`).then(res => {
            setPhone(res.data);
        });
    }, []);


    return (
        <>
            <Header/>
            <ItemInfo phone={phone}/>
            <Footer/>
        </>
    );
}