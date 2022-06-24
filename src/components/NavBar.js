import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './NavBar.css';


function NavBar(props) { 
    return (
        <div className='nav'>
            <Link to='/' className={`${props.activeHome ? "active" : ""}`}>Home</Link>
            <Link to='/portfolio' className={`${props.activePortfolio ? "active" : ""}`}>Portfolio</Link>
            <Link to='/resume' className={`${props.activeResume ? "active" : ""}`}>Resume</Link>
            <Link to='/contact' className={`${props.activeContact ? "active" : ""}`}>Contact</Link>

        </div>
    );
}


export default NavBar;