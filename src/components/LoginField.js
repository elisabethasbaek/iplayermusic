import "../components/style/LogInField.css";

export default function LogInField(props){
    return(
        <div className="loginField">
            <label htmlFor={props.forr}>{props.children}</label>
            <input type={props.type} id={props.forr} placeholder={props.placeholder} />
            <img src={props.icon} className="loginField__icon" alt="" ></img>
        </div>
    )
};