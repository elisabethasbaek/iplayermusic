import { Link } from "@reach/router";
import "../components/style/PlaylistsRotarySegment.css";

export default function PlaylistsRotarySegment({
  href,
  image,
  artist,
  album,
  onClick,
}) {
  return (
    <Link onClick={onClick} to={href} className="playlistsRotary__segment">
      <img src={image} alt={artist} className="playlistsRotary__image" />
      <h2 className="playlistsRotary__albumHeading">{album}</h2>
    </Link>
  );
}
