import "../Variables.css";
import FeaturedCard from "../components/FeaturedCard";
import MainNav from "../components/MainNav"; /* component */
import Heading from "../components/Heading";
import "../components/style/Main.css";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation";

export default function Featured(){
    return(
        <main className="main featured">
            <BreadcrumbNavigation color="var(--secondaryColor)">Featured</BreadcrumbNavigation>
            <Heading>Featured</Heading>
            <FeaturedCard image="https://picsum.photos/600/900?random=1" artist="The Greatest Showman" category="Soundtrack" />
            <FeaturedCard image="https://picsum.photos/600/900?random=2" artist="The Greatest Showman" category="Soundtrack" />
            <FeaturedCard image="https://picsum.photos/600/900?random=3" artist="The Greatest Showman" category="Soundtrack" />
            <FeaturedCard image="https://picsum.photos/600/900?random=4" artist="The Greatest Showman" category="Soundtrack" />
            <FeaturedCard image="https://picsum.photos/600/900?random=5" artist="The Greatest Showman" category="Soundtrack" />
            <MainNav filterWifi="brightness(10000%)"/>
        </main>
    )
};