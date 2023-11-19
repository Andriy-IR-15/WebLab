import './footer.css';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import instagram from '../../images/instagram.png';
import linkedin from '../../images/linkedin.png';


export default function SocialMedia() {
    return (
        <div className='socialMediaDiv'>
            <img className='social' src={facebook} alt="facebook" />
            <img className='social' src={twitter} alt="twitter" />
            <img className='social' src={linkedin} alt="linkedin" />
            <img className='social' src={instagram} alt="instagram" />
        </div>    
    );
} 
