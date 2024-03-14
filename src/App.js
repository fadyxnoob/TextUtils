import './App.css';
import React, { useState } from "react";
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState('white');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      message:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () =>{
    if(mode === 'white'){
      setMode('black');
      document.body.style.backgroundColor = 'black';
      showAlert(' Dark Mode Enabled', 'success :')
      document.title = 'TextUtils - Dark Mode'
    }else{
      setMode('white');
      document.body.style.backgroundColor = 'white';
      showAlert(' Dark Mode Disabled', 'success :')
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About"  mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className='container my-3'>
          <Routes>
            <Route path="/about" element={<About  mode={mode}/>} />
            <Route path="/" element={<TextForm  alert={showAlert} heading="Enter the Text"  mode={mode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
