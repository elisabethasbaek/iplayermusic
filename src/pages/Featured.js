import TokenContext from "../TokenContext";
import FeaturedCard from "../components/FeaturedCard"; /* component */
import MainNav from "../components/MainNav"; /* component */
import Heading from "../components/Heading"; /* component */
import BreadcrumbNavigation from "../components/BreadcrumbNavigation"; /* component */
import "../Variables.css"; /* css */
import "../components/style/Main.css"; /* css */
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function Featured(){
    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});

    useEffect(function(){
        axios.get("https://api.spotify.com/v1/me", {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(response => setContent(response.data));
    }, [token, setContent]);

    return(
        <main className="main featured">
            <BreadcrumbNavigation color="var(--secondaryColor)">Featured</BreadcrumbNavigation>
            <Heading>Featured</Heading>
            <FeaturedCard image="https://picsum.photos/600/900?random=1" artist="The Greatest Showman" category="Soundtrack" />
            <FeaturedCard image="https://picsum.photos/600/900?random=2" artist="The Greatest Showman" category="Soundtrack" />
            <FeaturedCard image="https://picsum.photos/600/900?random=3" artist="The Greatest Showman" category="Soundtrack" />
            <FeaturedCard image="https://picsum.photos/600/900?random=4" artist="The Greatest Showman" category="Soundtrack" />
            <FeaturedCard image="https://picsum.photos/600/900?random=5" artist="The Greatest Showman" category="Soundtrack" />
            <MainNav filterWifi="brightness(10000%)"/>
        </main>
    )
};