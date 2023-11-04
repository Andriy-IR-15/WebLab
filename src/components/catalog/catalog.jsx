import { useState } from "react";
import Filter from "../filter/filter";
import Footer from "../footer/footer";
import Header from "../header/header";
import ItemsContainer from "./itemsContainer";


export default function Catalog() {
    let phonesArray = [
        {
            id: 1,
            description: 'The iPhone 5 is a touchscreen smartphone designed and marketed by Apple to succeed the iPhone 4S.\n' +
                '        The iPhone 5 was unveiled at Apple\'s iPhone 5 event on September 12. ' +
                'Its features primarily consist of a new faster 1.3 Ghz Dual-core A6 Chip, a HD front-facing camera and ' +
                'a rear-facing camera with panorama mode and a lot of others. ',
            price: 7500,
            model: 'IPhone 5',            
        },
        {
            id: 2,
            description: 'Moto G4 is a line of Android smartphones manufactured by Motorola Mobility, a subsidiary of Lenovo.\n' +
                '        In comparison to the previous singular Moto G models, the G4 fragmented the line into three models,\n' +
                '        with the base model joined by the Moto G4 Play and the Moto G4 Plus with an upgraded camera and a fingerprint reader.',
            price: 5999,
            model: 'Moto G4'
        },
        {
            id: 3,
            description: 'The Pixel 5 is an Android smartphone designed, developed, and marketed by Google as part of the Google Pixel product line.\n' +
                '        It serves as the successor to the Pixel 4.\n' +
                '        It is the first flagship smartphone in the Pixel lineup not to feature an XL version.\n' +
                '        On October 19, 2021, it was succeeded by the Pixel 6 and Pixel 6 Pro.',
            price: 11999,
            model: 'Pixel 5'
        }
    ];

    let [phones, setPhones] = useState(phonesArray);

    return (
        <>
            <Header/>
            <Filter/>
            <ItemsContainer items={phones}/>
            <Footer/>
        </>
    );
}