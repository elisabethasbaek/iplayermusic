import BreadcrumbNavigation from "../components/BreadcrumbNavigation"; /* component */
import Heading from "../components/Heading"; /* component */
import MainNav from "../components/MainNav"; /* component */
import AlbumsFeatured from "../components/AlbumsFeatured"; /* component */
import AlbumsHeading from "../components/AlbumsHeading"; /* component */
import "../components/style/Main.css"; /* css */
import "../components/style/Albums.css"; /* css */
import "../Variables.css"; /* css */

export default function Albums(){
    return(
        <main className="main albums">
            <BreadcrumbNavigation color="var(--secondaryColor)">Music</BreadcrumbNavigation>
            <Heading>All Albums</Heading>
            <section className="albums__featured">
                <AlbumsHeading heading="Featured Albums" />
                <article className="albums__featuredImages">
                    <AlbumsFeatured image="https://picsum.photos/600/900?random=1" artist="Dis bitch"/>
                    <AlbumsFeatured image="https://picsum.photos/600/900?random=2" artist="Dat bitch"/>
                    <AlbumsFeatured image="https://picsum.photos/600/900?random=3" artist="Whomstve"/>
                    <AlbumsFeatured image="https://picsum.photos/600/900?random=4" artist="Ok?????"/>
                    <AlbumsFeatured image="https://picsum.photos/600/900?random=5" artist="It's Britney, bitch"/>
                    <AlbumsFeatured image="https://picsum.photos/600/900?random=6" artist="Famous they are"/>
                </article>
            </section>
            <MainNav filterPulse="brightness(10000%)" />
        </main>
    )
};