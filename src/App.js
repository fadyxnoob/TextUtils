import React, { useState } from "react";
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('white');
  const toggleMode = () =>{
    if(mode === 'white'){
      setMode('black');
      document.body.style.backgroundColor = 'black';
    }else{
      setMode('white');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About"  mode={mode} toggleMode={toggleMode}/>
        <div className='container my-3'>
          <Routes>
            <Route path="/" element={<About  mode={mode}/>} />
            <Route path="/textForm" element={<TextForm heading="Enter the Text"  mode={mode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
