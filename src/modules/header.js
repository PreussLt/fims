import '../css/header.css';
import {handleClickScroll as scroll} from './functions/basicFunctions';
import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>FIMS</h1>
            <nav>

                <ul>
                    <li onClick={() => scroll("Einsatzberichte")}><a >Einsatzberichte</a></li>
                    <li><a onClick={() => scroll("DME")} >Melder Verwaltung</a></li>
                    <li><a href="#">Links</a></li>
                </ul>

            </nav>
            <img
                src="https://feuerwehr.herrenberg.de/wp-content/themes/feuerwehr/images/logo.png"
            />
        </header>
    );
}

export default Header;
