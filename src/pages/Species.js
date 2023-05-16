import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import ReactSwitch from "react-switch";
import DarkTheme from "../components/DarkTheme";
import LightTheme from "../components/LightTheme";
import { ThemeContext } from "../components/Theme";

function Species() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    const [species, setSpecies] = useState([]);
    const [activeSpecie, setActiveSpecie] = useState(null);

    const names = [
        "Human",
        "Droid",
        "Wookie",
        "Rodian",
        "Hutt",
        "Yoda's species",
        "Trandoshan",
        "Mon Calamari",
        "Ewok",
        "Sullustan",
    ];

    useEffect(() => {
        axios.get("https://swapi.dev/api/species/").then((response) => {
            setSpecies(response.data.results);
        });
    }, []);

    const toggleDropdown = (e) => {
        setIsOpen(!isOpen);
        setActiveSpecie(
            activeSpecie === e.target.innerText ? null : e.target.innerText
        );
    };

    const filteredSpecies = activeSpecie
        ? species.filter((specie) => specie.name === activeSpecie)
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
                    {activeSpecie === name && (
                        <div className="dropdown">
                            <div className="dropdown-content">
                                {filteredSpecies.map((specie) => (
                                    <div key={specie.name}>
                                        <div>
                                            Classification:{" "}
                                            {specie.classification}
                                        </div>
                                        <div>
                                            Designation:{specie.designation}
                                        </div>
                                        <div>
                                            Average height:
                                            {specie.average_height}
                                        </div>
                                        <div>
                                            Skin color:{specie.skin_colors}
                                        </div>
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

export default Species;
