import TokenContext from "../TokenContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation"; /* component */
import Heading from "../components/Heading"; /* component */
import MainNav from "../components/MainNav"; /* component */
import AlbumsFeatured from "../components/AlbumsFeatured"; /* component */
import AlbumsHeading from "../components/AlbumsHeading"; /* component */
import AlbumsNewReleases from "../components/AlbumsNewReleases"; /* component */
import "../components/style/Main.css"; /* css */
import "../components/style/Albums.css"; /* css */
import "../Variables.css"; /* css */

export default function Albums(){
    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});

    useEffect(function(){
        axios.get("https://api.spotify.com/v1/albums", {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(function (response){
            setContent(response.data);
            console.log(content.albums?.items);
        })}, [token, setContent]);

    return(
        <main className="main albums">
            <BreadcrumbNavigation color="var(--secondaryColor)">Music</BreadcrumbNavigation>
            <Heading>All Albums</Heading>

            <section className="albums__featured">
                <AlbumsHeading heading="Featured Albums" to="/" />
                <article className="albums__featuredImages">
                    <AlbumsFeatured image="https://picsum.photos/600/900?random=1" artist="Dis bitch"/>
                    <AlbumsFeatured image="https://picsum.photos/600/900?random=2" artist="Dat bitch"/>
                    <AlbumsFeatured image="https://picsum.photos/600/900?random=3" artist="Whomstve"/>
                    <AlbumsFeatured image="https://picsum.photos/600/900?random=4" artist="Ok?????"/>
                    <AlbumsFeatured image="https://picsum.photos/600/900?random=5" artist="It's Britney, bitch"/>
                    <AlbumsFeatured image="https://picsum.photos/600/900?random=6" artist="Famous they are"/>
                </article>
            </section>

            <section className="albums__newReleases">
                <AlbumsHeading heading="New Releases" to="/newreleases" />
                <ul className="albums__newReleaseList">
                    <AlbumsNewReleases image="https://picsum.photos/600/900?random=7" title="Old Town Road" artist="Lil Nas" songs="12" />
                    <AlbumsNewReleases image="https://picsum.photos/600/900?random=8" title="Victory Lab" artist="Nipsey Hussles" songs="8" />
                    <AlbumsNewReleases image="https://picsum.photos/600/900?random=9" title="Thank U, Next" artist="Ariana Grande" songs="13" />
                    <AlbumsNewReleases image="https://picsum.photos/600/900?random=10" title="Death Race For Lovers" artist="Juice WRLD" songs="11" />
                    <AlbumsNewReleases image="https://picsum.photos/600/900?random=7" title="Old Town Road" artist="Lil Nas" songs="12" />
                    <AlbumsNewReleases image="https://picsum.photos/600/900?random=8" title="Victory Lab" artist="Nipsey Hussles" songs="8" />
                    <AlbumsNewReleases image="https://picsum.photos/600/900?random=9" title="Thank U, Next" artist="Ariana Grande" songs="13" />
                    <AlbumsNewReleases image="https://picsum.photos/600/900?random=10" title="Death Race For Lovers" artist="Juice WRLD" songs="11" />
                    <AlbumsNewReleases image="https://picsum.photos/600/900?random=7" title="Old Town Road" artist="Lil Nas" songs="12" />
                    <AlbumsNewReleases image="https://picsum.photos/600/900?random=8" title="Victory Lab" artist="Nipsey Hussles" songs="8" />
                    <AlbumsNewReleases image="https://picsum.photos/600/900?random=9" title="Thank U, Next" artist="Ariana Grande" songs="13" />
                    <AlbumsNewReleases image="https://picsum.photos/600/900?random=10" title="Death Race For Lovers" artist="Juice WRLD" songs="11" />
                </ul>
            </section>
            <MainNav filterPulse="brightness(10000%)" />
        </main>
    )
};