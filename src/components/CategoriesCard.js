import React, { useState } from "react";
import "../components/style/CategoriesCard.css";
import CategoriesSubGenreCard from "../components/CategoriesSubGenreCard";
import { Link } from "@reach/router";

export default function CategoriesCard(props){
    var [open, setOpen] = useState(false);

    function toggleShowSubGenre(event){
        setOpen(!open);
    };

    return(
        <>
            <article className="categoriesCard">
                <Link to={props.name} className="categoriesCard__text">{props.genre}</Link>
                <img src="../Dotdotdot.svg" alt="Button to click to expand menu to read more" className="categoriesCard__readMore" onClick={toggleShowSubGenre} />
            </article>
            <section className={"subGenreContainer " + (open ? "" : "subGenreContainer--hidden")}>
                <CategoriesSubGenreCard subgenre="Acoustic Blues" />
                <CategoriesSubGenreCard subgenre="Blues Rock" />
                <CategoriesSubGenreCard subgenre="Canadian Blues" />
                <CategoriesSubGenreCard subgenre="Jazz Blues" />
                <CategoriesSubGenreCard subgenre="Piano Blues" />
                <CategoriesSubGenreCard subgenre="Soul Blues" />
                <CategoriesSubGenreCard subgenre="Swamp Blues" />
            </section>
        </>
    )
};