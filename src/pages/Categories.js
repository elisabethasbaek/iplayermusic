import "../Variables.css"; /* css */

import Heading from "../components/Heading"; /* component */
import BreadcrumbNavigation from "../components/BreadcrumbNavigation"; /* component */
import CategoriesCard from "../components/CategoriesCard"; /* component */
import "../components/style/Main.css"; /* css */
import "../Variables.css"; /* css */

export default function Categories(){
    return(
        <main className="main categories">
            <BreadcrumbNavigation color="var(--secondaryColor)">Categories</BreadcrumbNavigation>
            <Heading>Categories</Heading>
            <CategoriesCard color="var(--primaryColor)" />
            <CategoriesCard color="var(--coral)" />
            <CategoriesCard color="var(--orange)" />
            <CategoriesCard color="var(--yellow)" />
            <CategoriesCard color="var(--lightGreen)" />
            <CategoriesCard color="var(--darkGreen)" />
            <CategoriesCard color="var(--lightBlue)" />
            <CategoriesCard color="var(--blue)" />
            <CategoriesCard color="var(--darkBlue)" />
        </main>
    )
};