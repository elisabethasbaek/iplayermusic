import "../components/style/SongsWithPlayButton.css";
import "../Variables.css";

export default function SongsWithPlayButton({title, artist, duration}) {
    return (
        <section className="songsWithPlayButton">
            <button className="songsWithPlayButton__playButton">
                <img src="../Play2.svg" alt="Click to play song button"/>
            </button>
            <section className="songsWithPlayButton__textContainer">
                <p className="songsWithPlayButton__song">{title}</p>
                <p className="songsWithPlayButton__artist">{artist}</p>
            </section>
            <p className="songsWithPlayButton__duration">{duration}</p>
        </section>
    )
}