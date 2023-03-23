import React from "react";
import "../App.css";
import logo from "../images/people.jpg";
import logo1 from "../images/films.jpg";
import logo2 from "../images/vehicles.jpg";
import LightTheme from "../components/LightTheme";
import ReactSwitch from "react-switch";
import DarkTheme from "../components/DarkTheme";
import { useState } from "react";
import { Link } from "react-router-dom";
import People from "./People";
import Planets from "./Planets";
import Species from "./Species";
import Starships from "./Starships";

function HomePage() {
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
            <div>
                <div className="title-subtitle">
                    <h1>Welcome to JabbaTheWhat?...a Star Wars story</h1>
                </div>

                <div className="list">
                    {" "}
                    <ul className="list2">
                        <div className="btn-txt-display">
                            <li>People</li>

                            <button className="hover-underline-animation">
                                <Link to="/people" element={<People />}>
                                    {" "}
                                    Explore more...
                                </Link>
                            </button>
                        </div>

                        <div className="btn-txt-display">
                            <li>Species</li>
                            <button className="hover-underline-animation">
                                <Link to="/species" element={<Species />}>
                                    {" "}
                                    Explore more...
                                </Link>
                            </button>
                        </div>

                        <div className="btn-txt-display">
                            <li>Starships</li>
                            <button className="hover-underline-animation">
                                <Link to="/starships" element={<Starships />}>
                                    {" "}
                                    Explore more...
                                </Link>
                            </button>
                        </div>

                        <div className="btn-txt-display">
                            <li>Planets</li>
                            <button className="hover-underline-animation">
                                <Link to="/planets" element={<Planets />}>
                                    {" "}
                                    Explore more...
                                </Link>
                            </button>
                        </div>
                    </ul>
                </div>
                <div className="images">
                    <div className="img1">
                        <img src={logo1} alt="" className="img" />
                    </div>
                    <div className="img2">
                        <img src={logo} alt="" className="img " />
                    </div>
                    <div className="img3">
                        <img src={logo2} alt="" className="img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
