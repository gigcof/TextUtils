import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message,
      type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has been enabled', 'success')
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark Mode has been enabled', 'success')
    }
  }
  return (
    <Router>
      <Navbar title='TextUtils' aboutText='About us' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path='/about' element={<About />} />
          <Route exact path='/' element={<TextForm heading='Enter the text to analyze below' mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
