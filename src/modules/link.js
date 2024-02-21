// App.js
import React from 'react';
import '../css/groups.css';
import web from '../icons/web.webp';


const link = () => {
    return (
        <div className="Group">

            {/* Gruppe 1 */}
            <h2 className="group-title" id="Link">Links</h2>
            <div className="group">

                <a href={"https://feuerwehr.herrenberg.de/"}>
                    <button className="box">
                    <img alt="icon" className="icon"  src={web}/> <br/>
                    <h4>Webseite FFW Herenberg</h4>
                    </button>
                </a>

                <a href={"EinsatzBearbeiten"}>
                    <button className="box">
                        <img alt="icon" className="icon"  src={web}/> <br/>
                        <h4>Bericht bearbeiten/ anzeigen</h4>
                    </button>
                </a>

                <a href={"EinsatzBearbeiten"}>
                    <button className="box">
                        <img alt="icon" className="icon"  src={web}/> <br/>
                        <h4>Alle Berichte Anzeigen</h4>
                    </button>
                </a>

            </div>
        </div>
    );
}

export default link;
