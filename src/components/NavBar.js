import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './NavBar.css';


function NavBar(props) {
    return (
        <div className='nav'>
            <div className='socials'>
                
            </div>
            <div className='page-links'>
                <Link to='/' className={`${props.activeHome ? "active" : ""}`}>Home</Link>
                <Link to='/portfolio' className={`${props.activePortfolio ? "active" : ""}`}>Portfolio</Link>
                <Link to='/resume' className={`${props.activeResume ? "active" : ""}`}>Resume</Link>
                <Link to='/contact' className={`${props.activeContact ? "active" : ""}`}>Contact</Link>
            </div>
        </div>
    );
}


export default NavBar;