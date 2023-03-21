import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Species from "./pages/Species";
import Starships from "./pages/Starships";

function App() {
    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [species, setSpecies] = useState([]);
    const [starships, setStarships] = useState([]);
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        async function fetchPeople() {
            const res = await fetch("https://swapi.dev/api/people?format=json");
            // .then((response) => response.json())
            // .then((data) => console.log(data));
            const data = await res.json();
            console.log(data.results);
        }

        async function fetchPlanets() {
            const res = await fetch(
                "https://swapi.dev/api/planets?format=json"
            );
            // .then((response) => response.json())
            // .then((data) => console.log(data));
            const data = await res.json();
            console.log(data.results);
        }

        async function fetchSpecies() {
            const res = await fetch("https://swapi.dev/api/species");
            // .then((response) => response.json())
            // .then((data) => console.log(data));
            const data = await res.json();
        }
        async function fetchStarships() {
            const res = await fetch("https://swapi.dev/api/starships");
            // .then((response) => response.json())
            // .then((data) => console.log(data));
            const data = await res.json();
        }

        fetchPeople();
        fetchSpecies();
        fetchStarships();
        fetchPlanets();
    }, []);
    console.log();

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/people" element={<People />} />
                <Route path="/species" element={<Species />} />
                <Route path="/starships" element={<Starships />} />
                <Route path="/planets" element={<Planets />} />
            </Routes>
        </>
    );
}

export default App;
