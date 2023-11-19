import Phones from "../phones/phones";
import Footer from "../footer/footer";
import Header from "../header/header";
import Hero from "../hero/hero";

export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <Phones/>
            <Footer/>
        </>
    );
}