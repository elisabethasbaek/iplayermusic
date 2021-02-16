import "../Variables.css"; /* css */
import "../components/style/Welcome.css"; /* css */

export default function Welcome() {
  return (
    <main className="main welcome">
      <img
        className="welcome__logo"
        src="../LogoDarkMode.svg"
        alt="Website logo"
      />
      <h1 className="welcome__heading">iPlayMusic</h1>
    </main>
  );
}
