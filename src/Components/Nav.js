import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

function Nav(props){
    return (
        <div id="nav">
            <button className='nav-button' onClick={props.handleNavClick}><div><Link to="/" name="home">Home</Link></div></button><br></br><br></br><br></br>
            <button className='nav-button' onClick={props.handleNavClick}><div><Link to="/about" name="about">About Us</Link></div></button><br></br><br></br><br></br>
            <button className='nav-button' onClick={props.handleNavClick}><div><Link to="/cases" name="cases">Cases</Link></div></button><br></br><br></br><br></br>
            <button className='nav-button' onClick={props.handleNavClick}><div><Link to="/contact" name="contact">Contact Us</Link></div></button>
        </div>
    );
}

export default Nav;