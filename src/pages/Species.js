import React, { useState } from "react";

function Species() {
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
                    <h2>Classification:</h2>
                    <h2>Designation:</h2>
                    <h2>Average height:</h2>
                    <h2>Skin color:</h2>
                </div>
            )}
        </div>
    );
}

export default Species;
