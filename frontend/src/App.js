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
  const [error, setError] = React.useState(null);
  
  const { user } = useAuthContext();
  function toggleMenu(override){
    if(!error || override.length>0){
      setClicked(current=> !current);
    }
  }
  function toggleMenuOverRide(){
      setClicked(current=> !current);
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
      toggleMenu={toggleMenuOverRide}
      clicked={clicked}
      />
      <div className="pages">
        <Routes>
          <Route
            path="/"
            element={
            user ? <Home
              className="home"
              windowSize={windowSize}
              toggleMenu={toggleMenu}
              clicked={clicked}
              setClicked={setClicked}
              setError={setError}
              error={error}
              /> : 
            < Navigate to='/login' />}
            />
          <Route
            path="/login"
            element={ !user ? <Login /> : < Navigate to='/' />}
          />
          <Route
            path="/signup"
            element={ !user ? < SignUp /> : < Navigate to='/'/>}
          />
        </Routes>
      </div>
      < Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;