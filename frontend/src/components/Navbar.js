import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';
//Font Awesome styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({windowSize, toggleMenu, clicked}) => {
    const { logout } = useLogout();
    const { user } = useAuthContext()

    const clickLogout = () => {
        logout();
    }

    return (
        <header>
            <div className="container">
            <Link to="/">
                <h1>ToDos</h1>
            </Link>
            {!user && 
            <div className="signup-login-container">
                <Link to="/signup">
                    <h1 className='signup-login'>SignUp</h1>
                </Link>
                <Link to="/login">
                    <h1 className='signup-login'>Login</h1>
                </Link>
            </div>}
            { user && (<div>
                <span className='username-logged-in'>{user.email}</span>
                <button
                className='logout-btn'
                onClick={clickLogout}
                >Logout</button>
            </div>)}
            {windowSize <= '600' && !clicked && user &&<FontAwesomeIcon 
            className='faBars' 
            icon={faPlus} 
            onClick={toggleMenu}
            />}
            {windowSize <= '600' && clicked && user &&<FontAwesomeIcon 
            className='faBars' 
            icon={faXmark} 
            onClick={toggleMenu}
            />}

            </div>
        </header>
    )
}

export default Navbar