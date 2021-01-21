import "../components/style/CategoriesSubGenreCard.css";

export default function CategoriesSubGenreCard(props){
    return(
        <article className="categoriesSubGenreCard">
            <p className="categoriesSubGenreCard__text">Fucking rad sub-genre</p>
            <img src="../ChevronRight.svg" alt="Button to click to go to sub-genre" className="categoriesSubGenreCard__chevron" />
        </article>
    )
};