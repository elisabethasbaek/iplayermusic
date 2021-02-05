import "../components/style/SongsWithPlayButton.css";
import "../Variables.css";
import timeConvert from "../components/TimeConverter";
import { Link } from "@reach/router";

export default function SongsWithPlayButton({href, title, artist, duration}) {
    return (
        <section className="songsWithPlayButton">
            <Link to={href} className="songsWithPlayButton__playButton">
                <img src="../Play2.svg" alt="Click to play song button"/>
            </Link>
            <section className="songsWithPlayButton__textContainer">
                <p className="songsWithPlayButton__song">{title}</p>
                <p className="songsWithPlayButton__artist">{artist}</p>
            </section>
            <p className="songsWithPlayButton__duration">{timeConvert(duration)}</p>
        </section>
    )
}