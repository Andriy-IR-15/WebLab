import './phones.css'


export default function PhoneInfo(props) {
    return (
        <div className="phoneInfoDiv">
            <img className='phonePicture' src={props.picture} alt="phone" />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    );
}