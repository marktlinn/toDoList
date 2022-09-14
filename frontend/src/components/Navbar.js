import React from 'react'
import { Link } from 'react-router-dom'
// import { useState } from 'react'

//Font Awesome styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
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
            <Link to="/signup">
                <h1>SignUp</h1></Link>
            <Link to="/login"><h1>Login</h1></Link>
            {windowSize <= '600' && !clicked &&<FontAwesomeIcon 
            className='faBars' 
            icon={faPlus} 
            onClick={toggleMenu}
            />}
            {windowSize <= '600' && clicked &&<FontAwesomeIcon 
            className='faBars' 
            icon={faXmark} 
            onClick={toggleMenu}
            />}

            </div>
        </header>
    )
}

export default Navbar