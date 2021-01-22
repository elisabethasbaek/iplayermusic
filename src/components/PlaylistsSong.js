import "../components/style/PlaylistsSong.css";
import "../Variables.css";

export default function PlaylistsSong({title, artist, duration}) {
    return (
        <section className="playlistsSong">
            <button className="playlistsSong__playButton">
                <img src="../Play2.svg" alt="Click to play song button"/>
            </button>
            <section className="playlistsSong__textContainer">
                <p className="playlistsSong__song">{title}</p>
                <p className="playlistsSong__artist">{artist}</p>
            </section>
            <p className="playlistsSong__duration">{duration}</p>
        </section>
    )
}