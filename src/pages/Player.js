import "../Variables.css";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation"; /* component */
import PlayerImage from "../components/PlayerImage"; /* component */
import MainNav from "../components/MainNav"; /* component */
import PlayerSlider from "../components/PlayerSlider"; /* component */
import PlayerNavigation from "../components/PlayerNavigation"; /* component */
import PlayerText from "../components/PlayerText"; /* component */
import "../components/style/Main.css"; /* css */
import "../components/style/Player.css"; /* css */
import "../Variables.css"; /* css */

export default function Player(){
    return(
        <main className="main player" style={{backgroundImage: `url("https://picsum.photos/2000/2000")`}}>
            <BreadcrumbNavigation color="rgba(0,0,0,0.0)" display="none">Playing</BreadcrumbNavigation>
            <PlayerImage />
            <PlayerText title="Title of dope ass song" artist="The fucking artist bruh" />
            <PlayerSlider start="0:00" end="3:40" />
            <PlayerNavigation />
            <MainNav display="none"/>
        </main>
    )
};