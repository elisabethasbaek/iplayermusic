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
            <FeaturedCard image="https://via.placeholder.com/600x900" artist="The Greatest Showman" category="Soundtrack" />
            <FeaturedCard image="https://via.placeholder.com/600x900" artist="The Greatest Showman" category="Soundtrack" />
            <FeaturedCard image="https://via.placeholder.com/600x900" artist="The Greatest Showman" category="Soundtrack" />
            <FeaturedCard image="https://via.placeholder.com/600x900" artist="The Greatest Showman" category="Soundtrack" />
            <FeaturedCard image="https://via.placeholder.com/600x900" artist="The Greatest Showman" category="Soundtrack" />
            <MainNav />
        </main>
    )
};