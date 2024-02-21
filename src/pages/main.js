import '../css/index.css';
import Header from "../modules/header";
import Group from "../modules/group";
import Dme from "../modules/dme";
import Link from "../modules/link";

function Main() {
    return (
    <div className="index">
        <Header/>
        <Group/>
        <Dme/>
        <Link/>
    </div>

);
}

export default Main;
