import React, { useEffect, useState } from "react";
import axios from "axios";
import LightTheme from "../components/LightTheme";
import DarkTheme from "../components/DarkTheme";
import ReactSwitch from "react-switch";

function Planets() {
    const [theme, setTheme] = useState("light");
    const [isOpen, setIsOpen] = useState(false);
    const [planets, setPlanets] = useState([]);
    const [activePlanet, setActivePlanet] = useState(null);

    const names = [
        "Alderaan",
        "Yavin IV",
        "Hoth",
        "Coruscant",
        "Dagobah",
        "Naboo",
        "Kamino",
        "Endor",
        "Bespin",
        "Tatooine",
    ];

    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/").then((response) => {
            setPlanets(response.data.results);
        });
    }, []);

    const toggleDropdown = (e) => {
        setIsOpen(!isOpen);
        setActivePlanet(
            activePlanet === e.target.innerText ? null : e.target.innerText
        );
    };

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    const filteredPlanets = activePlanet
        ? planets.filter((planet) => planet.name === activePlanet)
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
                    {activePlanet === name && (
                        <div className="dropdown">
                            <div className="dropdown-content">
                                {filteredPlanets.map((planet) => (
                                    <div key={planet.name}>
                                        <div>
                                            Rotation Period:{" "}
                                            {planet.rotation_period}
                                        </div>
                                        <div>
                                            Orbital Period:{" "}
                                            {planet.orbital_period}
                                        </div>
                                        <div>Diameter: {planet.diameter}</div>
                                        <div>Climate: {planet.climate}</div>
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

export default Planets;
