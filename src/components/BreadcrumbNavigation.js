import "../components/style/BreadcrumbNavigation.css";

export default function BreadcrumbNavigation(props){
    return(
        <section className="breadcrumbNavigation" style={{backgroundColor:props.color}}>
            <ion-icon name="chevron-back-outline" className="breadcrumbNavigation__chevron" onClick={() => window.history.back()}></ion-icon>
            <h1 className="breadcrumbNavigation__location">{props.children}</h1>
            <ion-icon name="search-outline" className="breadcrumbNavigation__search" style={{display:props.display}}></ion-icon>
        </section>
    )
};