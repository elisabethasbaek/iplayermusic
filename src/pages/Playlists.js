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

export default function Playlists(){
    return(
        <main className="main playlists">
            <img src="../sound-wave.svg" alt="" className="playlists__backgroundImage" />
            <BreadcrumbNavigation color="rgba(0,0,0,0.0)">Playlists</BreadcrumbNavigation>
            <Heading>Playlists</Heading> 

            <PlaylistsRotary />
            <section className="playlists__songs">
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
                <SongsWithPlayButton title="Old Town Road" artist="Lil Nas" duration="3 : 58" />
                <SongsWithPlayButton title="Don't Call Me Up" artist="Mabel" duration="2 : 46" />
                <SongsWithPlayButton title="Let Me Down Slowly" artist="Alec Benjamin" duration="4 : 12" />
                <SongsWithPlayButton title="Here With Me" artist="Marshmello" duration="3 : 37" />
                <SongsWithPlayButton title="Paradise" artist="Bazzi" duration="3 : 12" />
            </section>
            <PlaylistsButton album="/playlists/player" text="Listen all" />

            <MainNav filterMic="brightness(10000%)" />
        </main>
    )
}