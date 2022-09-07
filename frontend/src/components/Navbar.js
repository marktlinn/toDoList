import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
    //track the wondow
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(()=>{
        const resizeScreen = () =>{
            setWindowSize(window.innerWidth)
        }
        window.addEventListener('resize', resizeScreen)

        return () => {window.removeEventListener('resize', resizeScreen)}
    }, [])
    console.log(windowSize)

    return (
        <header>
            <div className="container">
            <Link to="/">
                <h1>ToDos</h1>
            </Link>
            </div>
        </header>
    )
}

export default Navbar