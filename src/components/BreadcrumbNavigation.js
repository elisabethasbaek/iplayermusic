import "../components/style/BreadcrumbNavigation.css";

export default function BreadcrumbNavigation(props){
    return(
        <section className="breadcrumbNavigation">
            <ion-icon name="chevron-back-outline" className="breadcrumbNavigation__chevron"></ion-icon>
            <h1 className="breadcrumbNavigation__location">{props.children}</h1>
            <ion-icon name="search-outline" className="breadcrumbNavigation__search"></ion-icon>
        </section>
    )
};