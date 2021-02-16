import "../components/style/AlbumsNewReleases.css";
import "../Variables.css";

export default function AlbumsNewReleases({ image, title, artist, songs }) {
  return (
    <section className="albumsNewReleases">
      <img
        src={image}
        alt={`${title} by ${artist}`}
        className="albumsNewReleases__image"
      />
      <section className="albumsNewReleases__textContainer">
        <p className="albumsNewReleases__song">{title}</p>
        <p className="albumsNewReleases__artist">{artist}</p>
      </section>
      <p className="albumsNewReleases__duration">{`${songs} Songs`}</p>
    </section>
  );
}
