import img from "../../assert/img/img.svg";
import { useNavigate } from "react-router-dom";
import "./Article.scss";

function Article({ number, text }) {
    
    const navigate = useNavigate();
    const navigateItem = () => {
        navigate(`/catalog/${number}`);
    }

    return (
        <div className="cardItem">
            <p>Item {number}</p>
            <img src={img} alt={"img"} />
            <div className="textCard">
                <h2>{text}</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui </span>
            </div>
            <button onClick={navigateItem}>View more</button>
        </div>
    )
}

export default Article;