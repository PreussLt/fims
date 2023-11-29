// App.js
import React from 'react';
import '../css/groups.css';
import pager from '../icons/pager.png';


const dme = () => {
    return (
        <div className="Group">

            {/* Gruppe 1 */}
            <h2 className="group-title" id="DME">Melderverwaltung</h2>
            <div className="group">

                <a href={"neuerEinsatz"}>
                    <button className="box">
                    <img alt="icon" className="icon"  src={pager}/> <br/>
                    <h4>Melder Liste einsehen</h4>
                    </button>
                </a>

                <a href={"EinsatzBearbeiten"}>
                    <button className="box">
                        <img alt="icon" className="icon"  src={pager}/> <br/>
                        <h4>Bericht bearbeiten/ anzeigen</h4>
                    </button>
                </a>

                <a href={"EinsatzBearbeiten"}>
                    <button className="box">
                        <img alt="icon" className="icon"  src={pager}/> <br/>
                        <h4>Alle Berichte Anzeigen</h4>
                    </button>
                </a>

                <a href={"EinsatzBearbeiten"}>
                    <button className="box">
                        <img alt="icon" className="icon"  src={pager}/> <br/>
                        <h4>Von mir zugewiesene Berichte</h4>
                    </button>
                </a>

            </div>
        </div>
    );
}

export default dme;
