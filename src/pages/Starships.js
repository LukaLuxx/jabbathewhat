import React, { useState } from "react";

function Starships() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}>
                <h1>Name:</h1>
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <h2>Model:</h2>
                    <h2>Manufacturer:</h2>
                    <h2>Cost(in credits):</h2>
                    <h2>Lenght:</h2>
                </div>
            )}
        </div>
    );
}

export default Starships;
