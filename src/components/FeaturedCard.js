import "../components/style/FeaturedCard.css";

export default function FeaturedCard({image, artist, category}){
    return(
        <article className="featuredCard">
            <img src={image} alt="" className="featuredCard__image"/>
            <div className="featuredCard__gradientOverlay"></div>
            <div className="featuredCard__textContainer">
                <p className="featuredCard__artist">{artist}</p>
                <p className="featuredCard__category">{category}</p>
            </div>
        </article>
    )
};