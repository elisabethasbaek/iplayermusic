import { Link } from "@reach/router";
import "../components/style/CategoriesSubGenreCard.css";

export default function CategoriesSubGenreCard({href, subgenre}){
    return(
        <Link to={href} className="categoriesSubGenreCard">
            <p className="categoriesSubGenreCard__text">{subgenre}</p>
            <img src="../ChevronRight.svg" alt="Button to click to
             go to sub-genre" className="categoriesSubGenreCard__chevron" />
        </Link>
    )
};