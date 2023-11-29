import Header from "../modules/header";
import "../css/form.css";

export function CreateMission(){
    return(
    <div className="index">
        <Header/>
        <div className="container">
            <h1>Neuen Einsatzbericht Schreiben</h1>
            <br/>
            <form action="">
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="fname">Titel: </label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="Brandmeldeanlage Seeländer"/>
                    </div>
                    <div className="col-25" id="Stichwort">
                        <label htmlFor="country">Alarmstichwort</label>
                    </div>
                    <div className="col-75">
                        <select id="country" name="country">
                            <option value="B">Brand</option>
                            <option value="T">Technische Hilfe</option>
                            <option value="S">Sonstige</option>
                        </select>
                        <select id="country" name="country">
                            <option value="1">Eins</option>
                            <option value="2">Zwei</option>
                            <option value="3">Drei</option>
                            <option value="4">Vier</option>
                            <option value="5">Fünf</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label form="subject">Einsatzbeschreibung:</label>
                    </div>
                    <div className="col-75">
                        <textarea id="subject" name="subject" placeholder="Hier eine Beschreibung des Einsatzes schreiben:   Brandmeldeanlage ohne Grund ausgelöst." height="200px"></textarea>
                    </div>
                </div>

                <div className="row">
                    <h4>d</h4>
                </div>


                <br/>
                    <div className="row">
                        <input type="submit" value="Submit"/>
                    </div>
            </form>
        </div>

    </div>

    );
}