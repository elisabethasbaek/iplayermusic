import Heading from "../components/Heading"; /* component */
import BreadcrumbNavigation from "../components/BreadcrumbNavigation"; /* component */
import MainNav from "../components/MainNav"; /* component */
import PlaylistsRotary from "../components/PlaylistsRotary"; /* component */
import PlaylistsSong from "../components/PlaylistsSong"; /* component */
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
                <PlaylistsSong title="Old Town Road" artist="Lil Nas" duration="3 : 58" />
                <PlaylistsSong title="Don't Call Me Up" artist="Mabel" duration="2 : 46" />
                <PlaylistsSong title="Let Me Down Slowly" artist="Alec Benjamin" duration="4 : 12" />
                <PlaylistsSong title="Here With Me" artist="Marshmello" duration="3 : 37" />
                <PlaylistsSong title="Paradise" artist="Bazzi" duration="3 : 12" />
                <PlaylistsSong title="Old Town Road" artist="Lil Nas" duration="3 : 58" />
                <PlaylistsSong title="Don't Call Me Up" artist="Mabel" duration="2 : 46" />
                <PlaylistsSong title="Let Me Down Slowly" artist="Alec Benjamin" duration="4 : 12" />
                <PlaylistsSong title="Here With Me" artist="Marshmello" duration="3 : 37" />
                <PlaylistsSong title="Paradise" artist="Bazzi" duration="3 : 12" />
                <PlaylistsSong title="Old Town Road" artist="Lil Nas" duration="3 : 58" />
                <PlaylistsSong title="Don't Call Me Up" artist="Mabel" duration="2 : 46" />
                <PlaylistsSong title="Let Me Down Slowly" artist="Alec Benjamin" duration="4 : 12" />
                <PlaylistsSong title="Here With Me" artist="Marshmello" duration="3 : 37" />
                <PlaylistsSong title="Paradise" artist="Bazzi" duration="3 : 12" />
            </section>
            <PlaylistsButton album="/playlists/player" text="Listen all" />

            <MainNav filterMic="brightness(10000%)" />
        </main>
    )
}