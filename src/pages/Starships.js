import React, { useState, useEffect } from "react";
import axios from "axios";
import LightTheme from "../components/LightTheme";
import DarkTheme from "../components/DarkTheme";
import ReactSwitch from "react-switch";

function Starships() {
    const [theme, setTheme] = useState("light");
    const [isOpen, setIsOpen] = useState(false);
    const [starships, setStarships] = useState([]);
    const [activeStarship, setActiveStarship] = useState(null);

    const names = [
        "CR90 corvette",
        "Star Destroyer",
        "Sentinel-class landing craft",
        "Death Star",
        "Millennium Falcon",
        "Y-wing",
        "X-wing",
        "TIE Advanced x1",
        "Executor",
        "Rebel transport",
    ];

    useEffect(() => {
        axios.get("https://swapi.dev/api/starships/").then((response) => {
            setStarships(response.data.results);
        });
    }, []);

    const toggleDropdown = (e) => {
        setIsOpen(!isOpen);
        setActiveStarship(
            activeStarship === e.target.innerText ? null : e.target.innerText
        );
    };

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    const filteredStarships = activeStarship
        ? starships.filter((starship) => starship.name === activeStarship)
        : [];

    return (
        <div id={theme}>
            <div className="theme-style">
                <LightTheme />
                <ReactSwitch
                    onChange={toggleTheme}
                    checked={theme === "dark"}
                />
                <DarkTheme />
            </div>
            {names.map((name, index) => (
                <div className="name-container dropbtn" key={index}>
                    <button className="name-button" onClick={toggleDropdown}>
                        {name}
                    </button>
                    {activeStarship === name && (
                        <div className="dropdown">
                            <div className="dropdown-content">
                                {filteredStarships.map((starship) => (
                                    <div key={starship.name}>
                                        <div>Model:{starship.model}</div>
                                        <div>
                                            Manufacturer:{starship.manufacturer}
                                        </div>
                                        <div>
                                            Cost(in credits):
                                            {starship.cost_in_credits}
                                        </div>
                                        <div>Lenght:{starship.length}</div>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Starships;
