import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Cart from "./page/Cart/Cart";
import Catalog from "./page/Catalog/Catalog";
import Header from "./components/Header/Header"
import Home from "./page/Home/Home";
import Item from "./page/Item/Item";
import axios from "axios";
import { useEffect, useState } from "react";
import { CurrencyContext } from "./jsx/Context"

function App() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8090/cameras").
      then((response) => {
        setCard(response.data);
      })
  }, []);

  return (
    <CurrencyContext.Provider value={card}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog data={card} />} />
          {card.map((el) => { return <Route key={el.id} path={`/catalog/${el.id}`} element={<Item />} /> })}
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CurrencyContext.Provider>
  );
}

export default App;
