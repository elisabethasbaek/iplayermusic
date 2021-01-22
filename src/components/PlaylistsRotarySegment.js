import "../components/style/PlaylistsRotarySegment.css";

export default function PlaylistsRotarySegment({ image, artist, album }) {
    return (
        <article className="playlistsRotary__segment">
            <img src={image} alt={artist} className="playlistsRotary__image" />
            <h2 className="playlistsRotary__albumHeading">{album}</h2>
        </article>
    )
}