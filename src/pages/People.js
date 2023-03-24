import React, { useState, useEffect } from "react";
import axios from "axios";
import LightTheme from "../components/LightTheme";
import DarkTheme from "../components/DarkTheme";
import ReactSwitch from "react-switch";

function People() {
    const [theme, setTheme] = useState("light");
    const [isOpen, setIsOpen] = useState(false);
    const [people, setPeople] = useState([]);
    const [activeName, setActiveName] = useState(null);

    const names = [
        "Luke Skywalker",
        "Darth Vader",
        "Leia Organa",
        "Obi-Wan Kenobi",
        "C-3PO",
        "Owen Lars",
        "Beru Whitesun lars",
        "Biggs Darklighter",
        "R2-D2",
        "R5-D4",
    ];

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/").then((response) => {
            setPeople(response.data.results);
        });
    }, []);

    const toggleDropdown = (e) => {
        setIsOpen(!isOpen);
        setActiveName(
            activeName === e.target.innerText ? null : e.target.innerText
        );
    };

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    const filteredPeople = activeName
        ? people.filter((person) => person.name === activeName)
        : people;

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
                    {activeName === name && (
                        <div className="dropdown">
                            <div className="dropdown-content">
                                {filteredPeople.map((person, index) => (
                                    <div key={index}>
                                        <div>
                                            Birth Year: {person.birth_year}
                                        </div>
                                        <div>Eye Color: {person.eye_color}</div>
                                        <div>Gender: {person.gender}</div>
                                        <div>Height: {person.height}</div>
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

export default People;
