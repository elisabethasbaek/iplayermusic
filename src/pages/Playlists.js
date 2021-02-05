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
import { navigate } from "@reach/router";

export default function Playlists(props){
    var [token] = useContext(TokenContext);
    var [tracks, setTracks] = useState([]);
    var [playlists, setPlaylists] = useState([]);
    var [featured, setFeatured] = useState([]);

    useEffect(function(){
        axios.get("https://api.spotify.com/v1/me/playlists", {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(function (response){
            setPlaylists(response.data.items);
    })}, [token, setPlaylists]);

    useEffect(function(){
        if(props.id)
        axios.get("https://api.spotify.com/v1/playlists/" + props.id, {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(function (response){
            setFeatured(response.data);
            console.log(featured.name)
    })}, [token, props.id, setFeatured]);

    useEffect(function(){
        if(props.id)
        axios.get("https://api.spotify.com/v1/playlists/" + props.id + "/tracks", {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(function (response){
            setTracks(response.data);
    })}, [token, props.id, setTracks]);
    
    return(
        <main className="main playlists">
            <img src="../sound-wave.svg" alt="" className="playlists__backgroundImage" />
            <BreadcrumbNavigation color="rgba(0,0,0,0.0)">Playlists</BreadcrumbNavigation>
            <Heading>Playlists</Heading> 

            {props.id
            ?
            <section className="playlistsRotary">
                { Array(3).fill(
                    <PlaylistsRotarySegment
                    href={"/playlists/" + featured?.id}
                    onClick={() => navigate(`/playlists/${featured?.id}`)}
                    image={featured?.images[0].url}
                    key={featured?.snapshot_id}
                    artist={featured?.name}
                    album={featured?.name}/>
                )}
            </section>
            :
            <section className="playlistsRotary">
                {playlists.map(list => (
                    <PlaylistsRotarySegment
                    href={"/playlists/" + list?.id}
                    onClick={() => navigate(`/playlists/${list?.id}`)}
                    image={list?.images[0].url}
                    key={list?.snapshot_id}
                    artist={list?.name}
                    album={list?.name}/>
                ))}
            </section>
            }

            <section className="playlists__songs">
                {tracks.items?.map(({track}) => (
                    <SongsWithPlayButton
                    key={track?.snapshot_id}
                    title={track?.name}
                    href={"/playlists/player"}
                    artist={track?.artists[0].name}
                    duration={track?.duration_ms} />
                    ))}
            </section>

            <PlaylistsButton
            album="/playlists/player/"
            text="Listen all" />

            <MainNav filterMic="brightness(10000%)" />
        </main>
    )
}





    {/* <section className="playlistsRotary">
        <PlaylistsRotarySegment
        href={"/playlists/" + featured?.id}
        onClick={() => navigate(`/playlists/${featured?.id}`)}
        image={featured?.images[0].url}
        key={featured?.snapshot_id}
        artist={featured?.name}
        album={featured?.name}/>
    </section>

    <section className="playlistsRotary">
        {playlists.map(list => (
            <PlaylistsRotarySegment
            href={"/playlists/" + list?.id}
            onClick={() => navigate(`/playlists/${list?.id}`)}
            image={list?.images[0].url}
            key={list?.snapshot_id}
            artist={list?.name}
            album={list?.name}/>
        ))}
    </section> */}