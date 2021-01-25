import "../Variables.css"; /* css */
import "../components/style/LogIn.css"; /* css */
import Heading from "../components/Heading"; /* component */
import PlaylistsButton from "../components/PlaylistsButton";
import LogInField from "../components/LogInField";

export default function LogIn(){
    return(
        <main className="main login">
            <Heading>Log In</Heading>
            <form>
                <LogInField forr="username" type="text" placeholder="Enter your username" icon="../User.svg">Username</LogInField>
                <LogInField forr="password" type="password" placeholder="Enter your password" icon="../Key.svg">Password</LogInField>
            </form>
            <PlaylistsButton text="Log In" album="/" />
            <article className="login__oneTouch">
                <img src="../Touch.svg" alt="Touch for one-touch login"/>
                <p>One-Touch Login</p>
            </article>
        </main>
    )
};