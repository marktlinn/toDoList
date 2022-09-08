import React from 'react'
import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react'


//Font Awesome styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = (props) => {
    function toggleSideNav(){
        const formElem = document.querySelector('form') 
        return formElem.style.display === 'flex'? formElem.style.display = 'none' : formElem.style.display = 'flex'
    }   
    return (
        <header>
            <div className="container">
            <Link to="/">
                <h1>ToDos</h1>
            </Link>
            {props.windowSize <= '600' && <FontAwesomeIcon 
            className='faBars' 
            icon={faBars} 
            onClick={toggleSideNav}
            />}
            </div>
        </header>
    )
}

export default Navbar

/*
If screen more than 600, don't show menu.
If screen less than 600, form is a toggle menu
*/