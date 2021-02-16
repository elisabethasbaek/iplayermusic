import { Link } from "@reach/router";
import "../components/style/FeaturedCard.css";

export default function FeaturedCard(props) {
  return (
    <Link
      to={"/playlists/" + props.id}
      className="featuredCard"
      onClick={props.onClick}
    >
      <img src={props.image} alt="" className="featuredCard__image" />
      <div className="featuredCard__gradientOverlay"></div>
      <div className="featuredCard__textContainer">
        <p className="featuredCard__artist">{props.artist}</p>
        <p className="featuredCard__category">{props.category}</p>
      </div>
    </Link>
  );
}
