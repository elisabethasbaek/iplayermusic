import { Link } from "@reach/router";
import "../components/style/MainNav.css";

export default function MainNav(props) {
  return (
    <section className="mainNav" style={{ display: props.display }}>
      <Link to="/albums">
        <img
          src="../Pulse.svg"
          alt="Icon of pulse"
          style={{ filter: props.filterPulse }}
        />
      </Link>
      <Link to="/playlists">
        <img
          src="../Microphone.svg"
          alt="Icon of a microphone"
          style={{ filter: props.filterMic }}
        />
      </Link>
      <Link to="/featured" className="mainNav__wifi">
        <img
          src="../Wifi.svg"
          alt="Main icon"
          style={{ filter: props.filterWifi }}
        />
      </Link>
      <Link to="/colortheme">
        <img
          src="../Contrast.svg"
          alt="Icon for light and dark mode"
          style={{ filter: props.filterContrast }}
        />
      </Link>
      <Link to="/categories">
        <img
          src="../Sett.svg"
          alt="Icon for settings"
          style={{ filter: props.filterSett }}
        />
      </Link>
    </section>
  );
}
