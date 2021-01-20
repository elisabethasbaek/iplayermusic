import "../Variables.css";
import FeaturedCard from "../components/FeaturedCard";
import Heading from "../components/Heading";
import "../components/style/Main.css";

export default function Featured(){
    return(
        <main className="main">
            <Heading>Featured</Heading>
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
        </main>
    )
};