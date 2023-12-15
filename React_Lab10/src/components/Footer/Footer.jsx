import './Footer.scss';
import facebook from '../../assert/img/facebook.png'
import twitter from '../../assert/img/twitter.png'
import linkedin from '../../assert/img/linkedin.png'
import google from '../../assert/img/google.jpg'
import logo from '../../assert/img/logo.jpg';

const Footer = () => {
    return (
        <div style={{ borderTop: "1px solid black", padding: "20px" }}>
            <div className="footer__envelopment">
                <div className="footer__envelopment-text">
                    <h4 className="footer__title">Branding stuff</h4>
                    <p className="footer__text small__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo</p>
                </div>
                <img src={logo} alt="footerlogo" className="footer-header"/>
                <div className="socials">
                    <img src={facebook} alt="facebook" className="facebook" />
                    <img src={twitter} alt="twitter" className="twitter" />
                    <img src={linkedin} alt="linkedin" className="linkedin" />
                    <img src={google} alt="google" className="google" />
                </div>
            </div>
            <p className="footer__copyright">
                2023 IoT © Copyright all rights reserved by Parylo Andrii
            </p>
        </div>
    )
}

export default Footer;