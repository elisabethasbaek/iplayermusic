import Heading from "../components/Heading"; /* component */
import BreadcrumbNavigation from "../components/BreadcrumbNavigation"; /* component */
import MainNav from "../components/MainNav"; /* component */
import "../components/style/Main.css"; /* css */
import "../Variables.css"; /* css */

export default function Albums(){
    return(
        <main className="main albums">
            <BreadcrumbNavigation color="var(--secondaryColor)">Music</BreadcrumbNavigation>
            <Heading>All Albums</Heading>

            <MainNav filterPulse="brightness(10000%)" />
        </main>
    )
};