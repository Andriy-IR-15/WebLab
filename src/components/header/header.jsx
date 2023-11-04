import {
    useMatch,
} from "react-router-dom";

import './header.css';
import PagesChoice from './pagesChoice';
import Logo from '../logo/logo';
import SearchBar from "../searchBar/searchBar";


function Header() {
    let url = window.location.href;
    let currentPage = url.split('/')[3];
    if (currentPage === "")
        currentPage = "home";
    const searchBar = currentPage ==="catalog" ? <SearchBar/> : <></>

    return (
        <div className="header">
            <Logo/>
            <PagesChoice chosen={currentPage}/>
            {searchBar}
        </div>
    );
}

export default Header;