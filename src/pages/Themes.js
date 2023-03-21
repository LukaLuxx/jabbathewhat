import React, { createContext } from "react";
import LightTheme from "../components/LightTheme";
import ReactSwitch from "react-switch";
import DarkTheme from "../components/DarkTheme";
import { useState } from "react";
import "../App.css";

function Themes() {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
    return (
        <div className="App" id={theme}>
            <p className="useTF">
                <b> Use the Force</b>
            </p>
            <div className="theme-style">
                <LightTheme />
                <ReactSwitch
                    onChange={toggleTheme}
                    checked={theme === "dark"}
                />
                <DarkTheme />
            </div>
        </div>
    );
}

export default Themes;
