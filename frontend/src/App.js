import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import './index.css';

function App() {
  const [clicked, setClicked] = React.useState(false)

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
            < Home
              windowSize={windowSize}
              toggleMenu={toggleMenu}
              clicked={clicked} 
          />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={< SignUp />}
          />
        </Routes>
      </div>
      < Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;