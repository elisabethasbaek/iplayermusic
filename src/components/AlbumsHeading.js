import { Link } from "@reach/router";
import "../components/style/AlbumsHeading.css";

export default function AlbumsHeading({ heading }) {
    return (
        <section className="albumsHeading">
            <p className="albumsHeading__heading">{heading}</p>
            <Link to="/" className="albumsHeading__viewAll">View All</Link>
        </section>
    )
};