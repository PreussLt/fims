// App.js
import React from 'react';
import '../css/groups.css';
import newMission from '../icons/newMission.png';
import editMission from '../icons/edit.png';
import missions from '../icons/missions.png';
import workflow from '../icons/workflow.png';

const Group = () => {
    return (
        <div>
            {/* Gruppe 1 */}
            <h2 className="group-title" id="Einsatzberichte">Einsatzberichte</h2>
            <div className="group">
                <a href={"neuerEinsatz"}>
                    <button className="box">
                    <img alt="icon" className="icon"  src={newMission}/> <br/>
                    <h4>Neuen Bericht anlegen</h4>
                    </button>
                </a>

                <a href={"EinsatzBearbeiten"}>
                    <button className="box">
                        <img alt="icon" className="icon"  src={editMission}/> <br/>
                        <h4>Bericht bearbeiten/ anzeigen</h4>
                    </button>
                </a>

                <a href={"EinsatzBearbeiten"}>
                    <button className="box">
                        <img alt="icon" className="icon"  src={missions}/> <br/>
                        <h4>Alle Berichte Anzeigen</h4>
                    </button>
                </a>

                <a href={"EinsatzBearbeiten"}>
                    <button className="box">
                        <img alt="icon" className="icon"  src={workflow}/> <br/>
                        <h4>Von mir zugewiesene Berichte</h4>
                    </button>
                </a>

            </div>
        </div>
    );
}

export default Group;
