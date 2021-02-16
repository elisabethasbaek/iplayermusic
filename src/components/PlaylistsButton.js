import { Link } from "@reach/router";
import "../components/style/PlaylistsButton.css";

export default function PlaylistsButton({ album, text }) {
  return (
    <>
      <Link to={album} className="playlistsButton">
        {text}
      </Link>
    </>
  );
}
