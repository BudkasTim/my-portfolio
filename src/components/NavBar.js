import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
const [click, setClick] = useState(false);

return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                    <Link to="/" className ="navbar-logo" >
                    Tim Namhai
                    <i class="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon">
                        <i className={click ? "fas fa-times": "fas fa-bars"}/>
                    </div>   
            </div>

        </nav>
    </>


    )

}
export default NavBar;