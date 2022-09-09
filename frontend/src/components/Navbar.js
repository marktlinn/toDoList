import React from 'react'
import { Link } from 'react-router-dom'
// import { useState } from 'react'

//Font Awesome styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = ({windowSize, toggleMenu, clicked}) => {
//    const [clicked, setClicked] = useState(false)

//     function toggleMenu(){
//         setClicked(current=> !current);
//         toggleSideNav(clicked)
//     }
    // function toggleSideNav(value){
    //     const formElem = document.querySelector('form') 
    //     return value === true? formElem.style.display = 'flex' : formElem.style.display = 'none';
    // }   
    return (
        <header>
            <div className="container">
            <Link to="/">
                <h1>ToDos</h1>
            </Link>
            {windowSize <= '600' && <FontAwesomeIcon 
            className='faBars' 
            icon={faBars} 
            onClick={toggleMenu}
            />}
            </div>
        </header>
    )
}

export default Navbar