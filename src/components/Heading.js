import "../components/style/Heading.css";

export default function Heading(props){
    return(
        <>
            <h1 className="heading">{props.children}</h1>
        </>
    )
}