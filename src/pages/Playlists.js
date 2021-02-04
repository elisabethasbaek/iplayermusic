import Heading from "../components/Heading"; /* component */
import BreadcrumbNavigation from "../components/BreadcrumbNavigation"; /* component */
import MainNav from "../components/MainNav"; /* component */
import SongsWithPlayButton from "../components/SongsWithPlayButton"; /* component */
import PlaylistsButton from "../components/PlaylistsButton"; /* component */
import PlaylistsRotarySegment from "../components/PlaylistsRotarySegment";
import "../Variables.css"; /* css */
import "../components/style/Main.css"; /* css */
import "../components/style/Playlists.css" /* css */
import "../Variables.css"; /* css */
import "../components/style/PlaylistsRotary.css";
import TokenContext from "../TokenContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function Playlists(props){
    var [token] = useContext(TokenContext);
    var [tracks, setTracks] = useState([]);
    var [currentPlaylist, setCurrentPlaylist] = useState("uh-oh!");
    var [playlists, setPlaylists] = useState([]);

    useEffect(function(){
        axios.get("https://api.spotify.com/v1/me/playlists", {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(function (response){
            setPlaylists(response.data.items);
            console.log(response.data.items)
    })}, [token, setPlaylists]);

    useEffect(function(){
        if(currentPlaylist)
        axios.get("https://api.spotify.com/v1/playlists/" + currentPlaylist + "/tracks", {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(function (response){
            setTracks(response.data);
    })}, [token, currentPlaylist, setTracks]);
    
    return(
        <main className="main playlists">
            <img src="../sound-wave.svg" alt="" className="playlists__backgroundImage" />
            <BreadcrumbNavigation color="rgba(0,0,0,0.0)">Playlists</BreadcrumbNavigation>
            <Heading>Playlists</Heading> 

            <section className="playlistsRotary">
                {playlists.map(list => (
                    <PlaylistsRotarySegment
                    href={"/playlists/" + list.id}
                    onClick={() => setCurrentPlaylist(list.id)}
                    image={list.images[0].url}
                    key={list.snapshot_id}
                    artist={list.name}
                    album={list.name}/>
                    ))}
            </section>


            <section className="playlists__songs">
                {tracks.items?.map(({track}) => (
                    <SongsWithPlayButton
                    key={track.snapshot_id}
                    title={track.name}
                    href={"/playlists/player"}
                    artist={track.artists[0].name}
                    duration={track.duration_ms} />
                ))}
            </section>

            <PlaylistsButton
            album="/playlists/player/"
            text="Listen all" />

            <MainNav filterMic="brightness(10000%)" />
        </main>
    )
}