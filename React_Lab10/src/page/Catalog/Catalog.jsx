import { useEffect } from "react";
import { Fragment, useState } from "react";
import Article from "../../components/Acticle/Article";
import Filter from "../../components/Filter/Filter";
import "./Catalog.scss";
import axios from "axios";
import { useCurrency } from "../../jsx/Context";

function Catalog() {
    const [search, searchSet] = useState("");
    const [cardItem, setCardItem] = useState(useCurrency());
    const [load, setLoad] = useState(true)

    const getValue = (event) => {
        searchSet(event.target.value);
    }

    const sendDataToParent = (cardFromChildren) => {
        setCardItem(cardFromChildren)
    }

    useEffect(() => {
        setInterval(()=> setLoad(false), 2500)
    }, [])

    useEffect(() => {
        function findByName() {
            axios.get("http://localhost:8090/cameras").then((response) => {
                if (search === '') {
                    setCardItem(response.data);
                } else {
                    let cardItem = response.data;
                    let foundCard = cardItem.filter((card) => {
                        return card["nameOfManufacturer"].search(search) !== -1
                    });
                    setCardItem(foundCard);
                }
            })
        };
        findByName();
    }, [search])

    return (
        <Fragment>
            <input type="text" className="SearchBox" onChange={getValue} />
            <Filter sendDataToParent={sendDataToParent} />
            <main className="articleCard">
                {load && <div className="loader">Loading...</div>}
                {!load && cardItem.map((el) => { return <Article key={el.id} number={el.id} text={el.nameOfManufacturer}  /> })}
            </main>
        </Fragment>
    );
}

export default Catalog