import { Link } from "@reach/router";
import "../components/style/AlbumsHeading.css";

export default function AlbumsHeading({ heading, to }) {
    return (
        <section className="albumsHeading">
            <Link to="/" className="albumsHeading__heading">{heading}</Link> {/* might as well be a link who cares */}
            <Link to="{to}" className="albumsHeading__viewAll">View All</Link>
        </section>
    )
};