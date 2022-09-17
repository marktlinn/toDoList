import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
import React from 'react';
//components and pages
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import './index.css';

function App() {
  const [clicked, setClicked] = React.useState(false)

  const { user } = useAuthContext();
  function toggleMenu(){
    setClicked(current=> !current);
      // const formElem = document.querySelector('form') 
      // return clicked === true? formElem.style.display = 'flex' : formElem.style.display = 'none';
  }

  const [windowSize, setWindowSize] = React.useState(window.innerWidth);

  React.useEffect(()=>{
      const resizeScreen = () =>{
          return setWindowSize(window.innerWidth)
      }
      window.addEventListener('resize', resizeScreen)

      return () => {window.removeEventListener('resize', resizeScreen)}
  }, [])

  return (
    <div className="App">
      <BrowserRouter >
      < Navbar 
      windowSize={windowSize}
      toggleMenu={toggleMenu}
      clicked={clicked}
      />
      <div className="pages">
        <Routes>
          <Route
            path="/"
            element={
            user ? <Home
              windowSize={windowSize}
              toggleMenu={toggleMenu}
              clicked={clicked} /> : 
            < Navigate to='/login' />}
            />
          <Route
            path="/login"
            element={ !user ? <Login /> : < Navigate to='/' />}
          />
          <Route
            path="/signup"
            element={ !user ? < SignUp /> : < Navigate />}
          />
        </Routes>
      </div>
      < Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;