import "../Variables.css"; /* css */

import Heading from "../components/Heading"; /* component */
import BreadcrumbNavigation from "../components/BreadcrumbNavigation"; /* component */
import CategoriesCard from "../components/CategoriesCard"; /* component */
import MainNav from "../components/MainNav"; /* component */
import "../components/style/Main.css"; /* css */
import "../Variables.css"; /* css */

export default function Categories(){
    return(
        <main className="main categories">
            <BreadcrumbNavigation color="var(--secondaryColor)">Categories</BreadcrumbNavigation>
            <Heading>Categories</Heading>

            <CategoriesCard color="var(--primaryColor)" genre="Alternative" />
            <CategoriesCard color="var(--coral)" genre="Blues" />
            <CategoriesCard color="var(--orange)" genre="Classical" />
            <CategoriesCard color="var(--yellow)" genre="Country" />
            <CategoriesCard color="var(--lightGreen)" genre="Dance" />
            <CategoriesCard color="var(--darkGreen)" genre="Electronic" />
            <CategoriesCard color="var(--lightBlue)" genre="Fitness &amp; Workout" />
            <CategoriesCard color="var(--blue)" genre="Hip-Hop/Rap" />
            <CategoriesCard color="var(--darkBlue)" genre="Industrial" />

            <MainNav filterSett="brightness(10000%)" />
        </main>
    )
};