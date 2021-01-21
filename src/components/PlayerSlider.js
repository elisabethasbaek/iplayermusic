import "../components/style/PlayerSlider.css";

export default function PlayerSlider({start, end}){
    return(
        <article className="playerSlider">
            <input type="range" min="1" max="100" value="60" className="playerSlider__slider" />
            <p className="playerSlider__startNumber">{start}</p>
            <p className="playerSlider__endNumber">{end}</p>
        </article>
    )
};