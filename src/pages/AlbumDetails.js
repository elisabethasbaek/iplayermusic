import BreadcrumbNavigation from "../components/BreadcrumbNavigation"; /* component */
import Heading from "../components/Heading"; /* component */
import MainNav from "../components/MainNav"; /* component */
import SongsWithPlayButton from "../components/SongsWithPlayButton"; /* component */
import AlbumDetailsNumberSongs from "../components/AlbumDetailsNumberSongs"; /* component */
import "../components/style/Main.css"; /* css */
import "../components/style/AlbumDetails.css"; /* css */
import "../Variables.css"; /* css */

export default function AlbumDetails(){
    return(
        <main className="main albumDetails">
            <img src="https://picsum.photos/600/900" alt="" className="albumDetails__backgroundImage" />
            <BreadcrumbNavigation color="rgba(0,0,0,0.0)" display="none">Album</BreadcrumbNavigation>
            <div className="albumDetails__detailContainer">
                <Heading>Old Town Road</Heading>
                <AlbumDetailsNumberSongs songs="12" className="albumDetails__numberOfSongs" />
                <p className="albumDetails__genreHashtags">genre hashtags</p>
            </div>
            
            <section className="albumDetails__songs">
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

            <MainNav filterPulse="brightness(10000%)" />
        </main>
    )
};