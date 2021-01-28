import { useContext, useEffect, useState } from "react";
import axios from "axios";
import TokenContext from "../TokenContext";

export default async function FetchFeatured(){
    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});

    useEffect(function(){
        axios.get("https://api.spotify.com/v1/browse/featured-playlists", {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(response => setContent(response.data));
    }, [token, setContent]);

    console.log(content);
}