import React from 'react';
import { useState } from 'react';

function NavBar() {
    const [loggedIn, setLoggedIn] = useState(false);
    
    const handleLoginClick = () => {
        setLoggedIn((prev) => !prev);
    };
    
    return (
        <div>
        <h1>Assignment 1</h1>
        <button id="login" onClick={handleLoginClick}>
            {loggedIn ? "Logout" : "Login"}
        </button>
        </div>
    );
    }

export default NavBar;
// This component can be imported and used in your main App component or any other component as needed.