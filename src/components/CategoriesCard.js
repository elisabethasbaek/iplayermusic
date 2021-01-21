import "../components/style/CategoriesCard.css";

export default function CategoriesCard(props){
    return(
        <article className="categoriesCard" style={{backgroundColor: props.color}}>
            <p className="categoriesCard__text">Dope-ass genre</p>
            <img src="../Dotdotdot.svg" alt="Button to click to expand menu to read more" className="categoriesCard__readMore" />
        </article>
    )
};