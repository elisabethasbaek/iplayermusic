import "../components/style/CategoriesCard.css";
import CategoriesSubGenreCard from "../components/CategoriesSubGenreCard";
import { Link } from "@reach/router";
import TokenContext from "../TokenContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function CategoriesCard(props) {
  var [token] = useContext(TokenContext);
  var [content, setContent] = useState([]);
  var [category, setCategory] = useState(null);

  useEffect(
    function () {
      axios
        .get(
          "https://api.spotify.com/v1/browse/categories/" +
            category +
            "/playlists",
          {
            headers: {
              Authorization: "Bearer " + token.access_token,
            },
          }
        )
        .then(function (response) {
          setContent(response.data);
          //console.log(content.playlists.items);
        });
    },
    [token, setContent, category]
  );

  var [open, setOpen] = useState(false);

  function toggleShowSubGenre(id) {
    setOpen(!open);
    setCategory(id);
  }

  return (
    <>
      <article className="categoriesCard">
        <Link to={props.name} className="categoriesCard__text">
          {props.genre}
        </Link>
        <img
          src="../Dotdotdot.svg"
          alt="Button to click to expand menu to read more"
          className="categoriesCard__readMore"
          onClick={() => toggleShowSubGenre(props.id)}
        />
      </article>
      <section
        className={
          "subGenreContainer " + (open ? "" : "subGenreContainer--hidden")
        }
      >
        {content.playlists?.items.map(function (item) {
          return (
            <CategoriesSubGenreCard
              href={"/playlists/" + item.id}
              subgenre={item.name}
            />
          );
        })}
      </section>
    </>
  );
}
