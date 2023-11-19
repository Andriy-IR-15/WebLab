import phones from '../../images/phones.jpg';
import './hero.css'

export default function Hero() {
    return (
        <div className='mainDiv'>
            <img className='phonesPicture' src={phones} alt='phones'/>
            <div className='titleDiv'>
                <h1>Phone store</h1>
                <p style={{textAlign: "start"}}>Looking for new cell phones? Shop for new cell phones, iPhones, unlocked phones,
                    iPhone accessories, contract mobile phones and more at our website.
                    MobileShop is the largest European webshop for smartphones and consumer electronics.
                    New SIM-free mobile phones. Best prices, fast delivery, warranty.</p>
            </div>
        </div>
    );
}
