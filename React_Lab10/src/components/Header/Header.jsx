import logo from '../../assert/img/logo.jpg';
import {NavLink} from "react-router-dom";
import './Header.scss';

function Header() {
    return (
        <header className="Header">
            <img src={logo} alt="logo" className="LogoHeader"/>
            <nav>
                <ul>
                    <li><NavLink to="/"> Home </NavLink></li>
                    <li><NavLink to="/catalog"> Catalog </NavLink></li>
                    <li><NavLink to="/cart"> Cart </NavLink></li>
                </ul>
            </nav>  
        </header>
    )
}

export default Header;