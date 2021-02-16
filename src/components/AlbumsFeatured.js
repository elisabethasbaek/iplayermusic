import { Link } from "@reach/router";
import "../components/style/AlbumsFeatured.css";

export default function AlbumsFeatured({ image, artist }) {
  return (
    <Link to="/albums/albumdetails">
      <img src={image} alt={artist} className="albumsFeatured" />
    </Link>
  );
}
