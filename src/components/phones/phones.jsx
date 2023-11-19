import './phones.css'
import PhoneInfo from './phoneInfo';
import iphone5 from '../../images/iphone5.jpg';
import motog4 from '../../images/motog4.jpg';
import pixel5 from '../../images/pixel5.jpg';
import ViewMoreButton from '../viewMoreButton/viewMoreButton';


export default function Phones() {
    let infoIphone5 = <p>The iPhone 5 is a touchscreen smartphone designed and marketed by Apple to succeed the iPhone 4S.
        The iPhone 5 was unveiled at Apple's iPhone 5 event on September 12</p>
    let infoMotoG4 = <p>Moto G4 is a line of Android smartphones manufactured by Motorola Mobility, a subsidiary of Lenovo.
        In comparison to the previous singular Moto G models, the G4 fragmented the line into three models,
        with the base model joined by the Moto G4 Play and the Moto G4 Plus with an upgraded camera and a fingerprint reader.</p>
    let infoPixel5 = <p>The Pixel 5 is an Android smartphone designed, developed, and marketed by Google as part of the Google Pixel product line.
        It serves as the successor to the Pixel 4.
        It is the first flagship smartphone in the Pixel lineup not to feature an XL version.
        On October 19, 2021, it was succeeded by the Pixel 6 and Pixel 6 Pro.</p>
    return (
        <div className='afterMainDiv'>
            <div className="topPhonesDiv">
                <PhoneInfo picture={iphone5} name='IPhone 5' description={infoIphone5}/>
                <PhoneInfo picture={motog4} name='Moto G4' description={infoMotoG4}/>
                <PhoneInfo picture={pixel5} name='Pixel 5' description={infoPixel5}/>
            </div>
            <ViewMoreButton/>
        </div>
    );
}
