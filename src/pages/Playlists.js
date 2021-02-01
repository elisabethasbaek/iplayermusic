import Heading from "../components/Heading"; /* component */
import BreadcrumbNavigation from "../components/BreadcrumbNavigation"; /* component */
import MainNav from "../components/MainNav"; /* component */
import PlaylistsRotary from "../components/PlaylistsRotary"; /* component */
import SongsWithPlayButton from "../components/SongsWithPlayButton"; /* component */
import PlaylistsButton from "../components/PlaylistsButton"; /* component */
import "../Variables.css"; /* css */
import "../components/style/Main.css"; /* css */
import "../components/style/Playlists.css" /* css */
import "../Variables.css"; /* css */
import TokenContext from "../TokenContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function Playlists(props){
    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});
    var [playlist, setPlaylist] = useState({});

    useEffect(function(){
        axios.get("https://api.spotify.com/v1/me/playlists", {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(function (response){
            setContent(response.data);
            //console.log(response.data)
    })}, [token, setContent]);

    useEffect(function(){
        axios.get("https://api.spotify.com/v1/me/playlists/" + props.id, {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(function (response){
            setPlaylist(response.data);
            console.log(playlist)
    })}, [token, setPlaylist]);

    return(
        <main className="main playlists">
            <img src="../sound-wave.svg" alt="" className="playlists__backgroundImage" />
            <BreadcrumbNavigation color="rgba(0,0,0,0.0)">Playlists</BreadcrumbNavigation>
            <Heading>Playlists</Heading> 

            <PlaylistsRotary />
            <section className="playlists__songs">
                {content.playlists?.items.map(function(item){
                    return(
                        <SongsWithPlayButton title={item.title} artist={item.artist} duration="3 : 58" />
                    )
                })}
                <SongsWithPlayButton title="Don't Call Me Up" artist="Mabel" duration="2 : 46" />
                <SongsWithPlayButton title="Let Me Down Slowly" artist="Alec Benjamin" duration="4 : 12" />
                <SongsWithPlayButton title="Here With Me" artist="Marshmello" duration="3 : 37" />
                <SongsWithPlayButton title="Paradise" artist="Bazzi" duration="3 : 12" />
                <SongsWithPlayButton title="Old Town Road" artist="Lil Nas" duration="3 : 58" />
                <SongsWithPlayButton title="Don't Call Me Up" artist="Mabel" duration="2 : 46" />
                <SongsWithPlayButton title="Let Me Down Slowly" artist="Alec Benjamin" duration="4 : 12" />
                <SongsWithPlayButton title="Here With Me" artist="Marshmello" duration="3 : 37" />
                <SongsWithPlayButton title="Paradise" artist="Bazzi" duration="3 : 12" />
                <SongsWithPlayButton title="Old Town Road" artist="Lil Nas" duration="3 : 58" />
                <SongsWithPlayButton title="Don't Call Me Up" artist="Mabel" duration="2 : 46" />
                <SongsWithPlayButton title="Let Me Down Slowly" artist="Alec Benjamin" duration="4 : 12" />
                <SongsWithPlayButton title="Here With Me" artist="Marshmello" duration="3 : 37" />
                <SongsWithPlayButton title="Paradise" artist="Bazzi" duration="3 : 12" />
            </section>
            <PlaylistsButton album="/playlists/player" text="Listen all" />

            <MainNav filterMic="brightness(10000%)" />
        {/* </main> */}
    )
}