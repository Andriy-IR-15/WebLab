import './phones.css'
import PhoneInfo from './phoneInfo';
import iphone5 from '../../images/iphone5.jpg';
import iphone12 from '../../images/iphone12.jpg';
import motog4 from '../../images/motog4.jpg';
import pixel5 from '../../images/pixel5.jpg';
import xiaomi12 from '../../images/xiaomi12.jpg';
import ViewMoreButton from '../viewMoreButton/viewMoreButton';
import {useState} from "react";


export default function Phones() {
    const phonesArray = [
        {
            description: 'The iPhone 5 is a touchscreen smartphone designed and marketed by Apple to succeed the iPhone 4S.\n' +
                '        The iPhone 5 was unveiled at Apple\'s iPhone 5 event on September 12. ' +
                'Its features primarily consist of a new faster 1.3 Ghz Dual-core A6 Chip, a HD front-facing camera and ' +
                'a rear-facing camera with panorama mode and a lot of others. ',
            price: 7500,
            model: 'IPhone 5',
            picture: iphone5
        },
        {
            description: 'Moto G4 is a line of Android smartphones manufactured by Motorola Mobility, a subsidiary of Lenovo.\n' +
                '        In comparison to the previous singular Moto G models, the G4 fragmented the line into three models,\n' +
                '        with the base model joined by the Moto G4 Play and the Moto G4 Plus with an upgraded camera and a fingerprint reader.',
            price: 5999,
            model: 'Moto G4',
            picture: motog4
        },
        {
            description: 'The Pixel 5 is an Android smartphone designed, developed, and marketed by Google as part of the Google Pixel product line.\n' +
                '        It serves as the successor to the Pixel 4.\n' +
                '        It is the first flagship smartphone in the Pixel lineup not to feature an XL version.\n' +
                '        On October 19, 2021, it was succeeded by the Pixel 6 and Pixel 6 Pro.',
            price: 11999,
            model: 'Pixel 5',
            picture: pixel5
        },
        {
            description: 'The iPhone 12 and iPhone 12 Mini (stylized and marketed as iPhone 12 mini) are a range of ' +
                'smartphones designed, developed, and marketed by Apple Inc. They are the fourteenth-generation, ' +
                '"affordable flagship" iPhones, succeeding the iPhone 11.[18] They were unveiled at a virtually held ' +
                'Apple Special Event at Apple Park in Cupertino, California on October 13, 2020',
            price: 25000,
            model: 'IPhone 12',
            picture: iphone12
        },
        {
            description: 'The Xiaomi 12 is a line of premium high-end flagship smartphones, developed and manufactured ' +
                'by Xiaomi as part of its Mi Series. The phone was announced on December 28, 2021, and released a few ' +
                'days later in China on December 31 and globally on February 8, 2022.',
            price: 10999,
            model: 'Xiaomi 12',
            picture: xiaomi12
        }
    ];
    const [homePhones, setHomePhones] = useState([
        phonesArray[0], phonesArray[1], phonesArray[2]
    ]);
    return (
        <div className='heroDiv'>
            <div className="topPhonesDiv">
                <PhoneInfo picture={homePhones[0].picture} name={homePhones[0].model} description={homePhones[0].description}/>
                <PhoneInfo picture={homePhones[1].picture} name={homePhones[1].model} description={homePhones[1].description}/>
                <PhoneInfo picture={homePhones[2].picture} name={homePhones[2].model} description={homePhones[2].description}/>
            </div>
            <ViewMoreButton onClick={() => {
                let length = phonesArray.length;
                let randindex1 = Math.floor(Math.random() * length);
                let randindex2;
                do {randindex2 = Math.floor(Math.random() * length)} while (randindex2 === randindex1);
                let randindex3;
                do {randindex3 = Math.floor(Math.random() * length)} while (randindex3 === randindex1 || randindex3 === randindex2);
                setHomePhones([phonesArray[randindex1], phonesArray[randindex2], phonesArray[randindex3]]);
            }
            }/>
        </div>
    );
}
