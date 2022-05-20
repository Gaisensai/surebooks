import React from "react";
import './Nav.css';

const Nav = () => {
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="title">
                        <h3>Surebooks</h3>
                    </div>
                    <div className="links">
                        <a href="">About</a>
                        <a href="">Contact</a>
                    </div>
                </div>
            </nav>
            
        </>
     );
}
 
export default Nav;