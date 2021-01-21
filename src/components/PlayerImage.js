import "../components/style/PlayerImage.css";

export default function PlayerImage(){
    return(
        <article className="playerImage">
            <div className="playerImage__overlay"></div>
            <img src="https://picsum.photos/900/900/" alt="A record" className="playerImage__image"/>
            <div className="playerImage__border1"></div>
            <div className="playerImage__border2"></div>
        </article>
    )
};