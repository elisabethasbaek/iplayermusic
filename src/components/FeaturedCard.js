import "../components/style/FeaturedCard.css";

export default function FeaturedCard(){
    return(
        <article className="featuredCard">
            <img src="https://via.placeholder.com/600x900" alt="" className="featuredCard__image"/>
            <div className="featuredCard__gradientOverlay"></div>
            <div className="featuredCard__textContainer">
                <p className="featuredCard__artist">The Greatest Showman</p>
                <p className="featuredCard__category">Soundtrack</p>
            </div>
        </article>
    )
};