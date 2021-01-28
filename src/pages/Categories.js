import TokenContext from "../TokenContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Heading from "../components/Heading"; /* component */
import BreadcrumbNavigation from "../components/BreadcrumbNavigation"; /* component */
import CategoriesCard from "../components/CategoriesCard"; /* component */
import MainNav from "../components/MainNav"; /* component */
import "../components/style/Main.css"; /* css */
import "../Variables.css"; /* css */
import "../components/style/Categories.css";

export default function Categories(){
    var [token] = useContext(TokenContext);
    var [content, setContent] = useState([]);

    useEffect(function(){
        axios.get("https://api.spotify.com/v1/recommendations/available-genre-seeds", {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(function (response){
            setContent(response.data);
            //console.log(content.genres)
        })}, [token, setContent]);

    return(
        <main className="main categories">
            <BreadcrumbNavigation color="var(--secondaryColor)">Categories</BreadcrumbNavigation>
            <Heading>Categories</Heading>

            {content.genres?.map(function(item){
               return(
                    <CategoriesCard key={item} genre={item} name={"/playlists/" + item} />
               )
           })}

            <MainNav filterSett="brightness(10000%)" />
        </main>
    )
};