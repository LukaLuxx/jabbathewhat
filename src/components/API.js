import { useState, useEffect } from "react";

function APIcall() {
    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [species, setSpecies] = useState([]);
    const [starships, setStarships] = useState([]);
    const [films, setFilms] = useState([]);

    useEffect(() => {
        async function fetchPeople() {
            fetch("https://swapi.dev/api/people?format=json")
                .then((response) => response.json())
                .then((data) => console.log(data));
        }

        async function fetchPlanets() {
            fetch("https://swapi.dev/api/planets?format=json")
                .then((response) => response.json())
                .then((data) => console.log(data));
            //     let data = await res.json();
            //     setPlanets(data.result);
        }

        async function fetchVehicles() {
            fetch("https://swapi.dev/api/vehicles?format=json")
                .then((response) => response.json())
                .then((data) => console.log(data));
            //     let data = await res.json();
            //     setVehicles(data.result);
        }
        async function fetchSpecies() {
            fetch("https://swapi.dev/api/species?format=json")
                .then((response) => response.json())
                .then((data) => console.log(data));
            //     let data = await res.json();
            //     setVehicles(data.result);
        }
        async function fetchStarships() {
            fetch("https://swapi.dev/api/starships?format=json")
                .then((response) => response.json())
                .then((data) => console.log(data));
            //     let data = await res.json();
            //     setVehicles(data.result);
        }
        async function fetchFilms() {
            fetch("https://swapi.dev/api/films?format=json")
                .then((response) => response.json())
                .then((data) => console.log(data));
            //     let data = await res.json();
            //     setVehicles(data.result);
        }

        fetchPeople();
        fetchPlanets();
        fetchVehicles();
        fetchSpecies();
        fetchStarships();
        fetchFilms();
    }, []);
    console.log();
}

export default APIcall;
