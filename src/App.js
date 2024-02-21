import './css/index.css'
import {Route, Routes} from 'react-router-dom'
import Main from "./pages/main"
import {CreateMission} from "./pages/createMission";


function App() {
  return (
      <Routes>
          {/* Routen auf Main */}
          <Route path="/" element={<Main/>} />
          <Route path="/Einsatzberichte" element={<Main/>} />
          <Route path="/Melderverwaltung" element={<Main/>} />
          <Route path="/" element={<Main/>} />

          {/*Einsätze*/}
          <Route path="/neuerEinsatz" element={<CreateMission/>} />

          {/* Externe Absprünge*/}
          <Route path="/WebsiteFFWHBG" component={() => {
              window.open('https://feuerwehr.herrenberg.de/');
              return null;
          }}/>



      </Routes>
  );
}

export default App;
