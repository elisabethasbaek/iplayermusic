import "../Variables.css"; /* css */
import "../components/style/Login.css"; /* css */
import Heading from "../components/Heading"; /* component */
import PlaylistsButton from "../components/PlaylistsButton";
import LoginField from "../components/LoginField";

export default function Login(){
    return(
        <main className="main login">
            <Heading>Log In</Heading>
            <form>
                <LoginField forr="username" type="text" placeholder="Enter your username" icon="../User.svg">Username</LoginField>
                <LoginField forr="password" type="password" placeholder="Enter your password" icon="../Key.svg">Password</LoginField>
            </form>
            <PlaylistsButton text="Log In" album="/" />
            <article className="login__oneTouch">
                <img src="../Touch.svg" alt="Touch for one-touch login"/>
                <p>One-Touch Login</p>
            </article>
        </main>
    )
};