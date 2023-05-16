import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Species from "./pages/Species";
import Starships from "./pages/Starships";
import ThemeProvider from "./components/Theme";

function App() {
    return (
        <ThemeProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/people" element={<People />} />
                <Route path="/species" element={<Species />} />
                <Route path="/starships" element={<Starships />} />
                <Route path="/planets" element={<Planets />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
