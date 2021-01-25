import "../components/style/AlbumDetailsNumberSongs.css";

export default function AlbumDetailsNumberSongs({songs}){
    return(
        <>
        <p className="albumDetailsNumberSongs">{songs} Songs</p>
        </>
    )
};