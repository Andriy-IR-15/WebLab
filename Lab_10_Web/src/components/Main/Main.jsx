import { useState } from 'react';
import Phone from '../../assert/img/MainPhone.webp';
import Card from '../Card/Card.jsx';
import './Main.scss';

function Main() {
    const [view, setView] = useState(false);
    const [text, setText] = useState("View more")
    const moreInfo = () => {
        if (text === "View more") {setText("View less")}
        if (text === "View less") {setText("View more")}
        setView(!view)
    }

    return (
        <main className='Main'>
            <div className='MainInformation'>
                <img src={Phone} alt='Phone' />
                <div>
                    <h1> Phone </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
                </div>
            </div>
            <div className='MainCard'>
                <Card number='1' />
                <Card number='2' />
                <Card number='3' />
            </div>
            {view && <div className='MainCard'>
                <Card number='3' />
                <Card number='2' />
                <Card number='1' />
            </div>}
            <button  className='button-more' onClick={moreInfo}> {text} </button>
        </main>
    )
}

export default Main;