import "../components/style/AlbumsFeatured.css";

export default function AlbumsFeatured({image, artist}){
    return(
        <>
        <img src={image} alt={artist} className="albumsFeatured" />
        </>
    )
};