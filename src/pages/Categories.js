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
        axios.get("https://api.spotify.com/v1/browse/categories", {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(function (response){
            setContent(response.data);
            //console.log(content.categories.items)
        })}, [token, setContent]);

    return(
        <main className="main categories">
            <BreadcrumbNavigation color="var(--secondaryColor)">Categories</BreadcrumbNavigation>
            <Heading>Categories</Heading>

            {content.categories?.items.map(function(item){
               return(
                    <CategoriesCard id={item.id} key={item} genre={item.name} name={"/playlists/" + item.id} />
               )
           })}

            <MainNav filterSett="brightness(10000%)" />
        </main>
    )
};