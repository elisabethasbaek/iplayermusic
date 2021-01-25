import "../Variables.css"; /* css */
import "../components/style/LogIn.css"; /* css */
import Heading from "../components/Heading"; /* component */
import PlaylistsButton from "../components/PlaylistsButton";

export default function LogIn(){
    return(
        <main className="main login">
            <Heading>Log In</Heading>
            <PlaylistsButton text="Log In" album="/" />
            <article className="login__oneTouch">
                <img src="../Touch.svg" alt="Touch for one-touch login"/>
                <p>One-Touch Login</p>
            </article>
        </main>
    )
};