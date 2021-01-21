import "../components/style/PlayerText.css";

export default function PlayerText({title, artist}) {
    return (
        <section className="player__textContainer">
            <h1 className="player__title">{title}</h1>
            <h2 className="player__artist">{artist}</h2>
        </section>
    )
}