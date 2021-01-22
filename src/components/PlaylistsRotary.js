import "../components/style/PlaylistsRotary.css";
import PlaylistsRotarySegment from "../components/PlaylistsRotarySegment";

export default function PlaylistsRotary() {
    return (
        <section className="playlistsRotary">
            <PlaylistsRotarySegment image="https://picsum.photos/400/400?random=1" artist="Whomever the fuck this is" />
            <PlaylistsRotarySegment image="https://picsum.photos/400/400?random=2" album="Top 50 Rock Ballads" artist="Whomever the fuck this is" />
            <PlaylistsRotarySegment image="https://picsum.photos/400/400?random=3" artist="Whomever the fuck this is" />
        </section>
    )
}