import "../components/style/PlayerNavigation.css";

export default function PlayerNavigation(){
    return(
        <section className="playerNavigation">
            <img src="../SkipBack.svg" alt="" className="playerNavigation__skipBack" />
            <img src="../Rewind.svg" alt="" className="playerNavigation__rewind" />
            <img src="../Play.svg" alt="" className="playerNavigation__play" />
            <img src="../FastForward.svg" alt="" className="playerNavigation__fastForward" />
            <img src="../SkipForward.svg" alt="" className="playerNavigation__skipForward" />
        </section>
    )
};