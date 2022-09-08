import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './index.css';

function App() {

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
      < Navbar windowSize={windowSize}/>
      <div className="pages">
        <Routes>
          <Route
          path="/"
          element={< Home />}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
