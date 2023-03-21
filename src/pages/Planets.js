import React, { useState } from "react";

function Planets() {
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
                    <h2>Rotation period:</h2>
                    <h2>Orbital period:</h2>
                    <h2>Diametar:</h2>
                    <h2>Climate:</h2>
                </div>
            )}
        </div>
    );
}
export default Planets;
