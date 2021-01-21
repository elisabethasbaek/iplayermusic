import "../components/style/PlayerImage.css";

export default function PlayerImage(){
    return(
        <article className="playerImage">
            <img src="../Record.svg" alt="A record" className="playerImage__image"/>
            <div className="playerImage__border1"></div>
            <div className="playerImage__border2"></div>
        </article>
    )
};