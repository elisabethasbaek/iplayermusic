import "../Variables.css"; /* css */

import Heading from "../components/Heading"; /* component */
import BreadcrumbNavigation from "../components/BreadcrumbNavigation"; /* component */
import MainNav from "../components/MainNav"; /* component */
import "../components/style/Main.css"; /* css */
import "../components/style/Playlists.css" /* css */
import "../Variables.css"; /* css */
import PlaylistsRotary from "../components/PlaylistsRotary";

export default function Playlists(){
    return(
        <main className="main playlists">
            <img src="../sound-wave.svg" alt="" className="playlists__backgroundImage" />
            <BreadcrumbNavigation color="rgba(0,0,0,0.0)">Playlists</BreadcrumbNavigation>
            <Heading>Playlists</Heading> 
            <PlaylistsRotary />
            <MainNav />
        </main>
    )
}