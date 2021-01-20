import { Link } from "@reach/router";
import "../components/style/MainNav.css";

export default function MainNav(){
    return(
        <section className="mainNav">
            <Link to="/albums">
                <img src="../Pulse.svg" alt="Icon of pulse"/>
            </Link>
            <Link to="/playlists">
                <img src="../Microphone.svg" alt="Icon of a microphone"/>
            </Link>
            <Link to="/" className="mainNav__wifi">
                <img src="../Wifi.svg" alt="Main icon"/>
            </Link>
            <Link to="/colortheme">
                <img src="../Contrast.svg" alt="Icon for light and dark mode"/>
            </Link>
            <Link to="/categories">
                <img src="../Sett.svg" alt="Icon for settings"/>
            </Link>
        </section>
    )
}