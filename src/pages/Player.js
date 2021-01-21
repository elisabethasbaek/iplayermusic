import "../Variables.css";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation"; /* component */
import PlayerImage from "../components/PlayerImage"; /* component */
import MainNav from "../components/MainNav"; /* component */
import "../components/style/Main.css"; /* css */
import "../components/style/Player.css"; /* css */
import "../Variables.css"; /* css */

export default function Player(){
    return(
        <main className="main player">
            <BreadcrumbNavigation color="rgba(0,0,0,0.0)" display="none">Playing</BreadcrumbNavigation>
            <PlayerImage />
            <section className="player__textContainer">
                <h1 className="player__title">Title of dope ass song</h1>
                <h2 className="player__artist">The fucking artist bruh</h2>
            </section>
            <MainNav />
        </main>
    )
};