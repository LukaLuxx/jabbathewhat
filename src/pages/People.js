import React, { useState } from "react";

function People() {
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
                    <h2>Species:</h2>
                    <h2>Height:</h2>
                    <h2>Homeworld:</h2>
                    <h2>Starship:</h2>
                </div>
            )}
        </div>
    );
}

export default People;
