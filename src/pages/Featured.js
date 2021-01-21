import "../Variables.css";
import FeaturedCard from "../components/FeaturedCard";
import Heading from "../components/Heading";
import "../components/style/Main.css";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";

export default function Featured(){
    return(
        <main className="main featured">
            <BreadcrumbNavigation color="var(--secondaryColor)">Featured</BreadcrumbNavigation>
            <Heading>Featured</Heading>
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
        </main>
    )
};