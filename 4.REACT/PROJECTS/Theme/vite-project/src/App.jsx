import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./App.module.css";

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <>
      <div className={isDark ? styles.darkTheme : styles.lightTheme}>
        <h1 className={styles.heading}>THEME TOGGLE</h1>
        <div className={styles.icons}>
          <button className="btn btn-outline-dark" onClick={toggleTheme}>
            <i className={`fa-solid ${isDark ? "fa-sun" : "fa-moon"}`}></i>{" "}
            {isDark ? "DAY MODE" : "NIGHT MODE"}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
