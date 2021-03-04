import queryString from "querystring";
import "../Variables.css"; /* css */
import "../components/style/LogIn.css"; /* css */
import Heading from "../components/Heading"; /* component */
// import PlaylistsButton from "../components/PlaylistsButton";
// import LogInField from "../components/LogInField.js";

export default function LogIn() {
  var queryParameters = queryString.stringify({
    response_type: "code",
    client_id: "de5abe58dab743b786d000caeabc78e1",
    scope: "user-read-private user-read-email",
    redirect_uri: process.env.NODE_ENV === "prodction"
      ? "https://iplaymusic-elisabeth.netlify.app/callback"
      : "http://localhost:8888/callback",
    state:
      "jfedvpusebvfpesbfvpief893y4937y647yriugfb3i78tr873ugr3urbvfbpu3rgr82y210",
  });

  return (
    <main className="main login">
      <Heading>Log In</Heading>
      {/* <form>
        <LogInField
          forr="username"
          type="text"
          placeholder="Enter your username"
          icon="../User.svg"
        >
          Username
        </LogInField>
        <LogInField
          forr="password"
          type="password"
          placeholder="Enter your password"
          icon="../Key.svg"
        >
          Password
        </LogInField>
      </form>
      <PlaylistsButton text="Log In" album="/" /> */}
      <a
        className="login__spotify"
        href={`https://accounts.spotify.com/authorize?${queryParameters}`}
      >
        <img src="../spotify.png" alt="Log in with Spotify" />
        <p className="login__spotifyLink">Login with Spotify</p>
      </a>
    </main>
  );
}
