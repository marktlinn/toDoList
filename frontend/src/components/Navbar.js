import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


//Font Awesome styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    //track the wondow
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(()=>{
        const resizeScreen = () =>{
            return setWindowSize(window.innerWidth)
        }
        window.addEventListener('resize', resizeScreen)

        return () => {window.removeEventListener('resize', resizeScreen)}
    }, [])


    return (
        <header>
            <div className="container">
            <Link to="/">
                <h1>ToDos</h1>
            </Link>
            {windowSize <= '600' && <FontAwesomeIcon 
            className='faBars' 
            icon={faBars} 
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