import { Link } from "@reach/router";
import "../components/style/PlaylistsButton.css";

export default function PlaylistsButton({text}){
    return(
        <>
        <Link to="/albums/albumdetails" className="playlistsButton">{text}</Link>
        </>
    )
};