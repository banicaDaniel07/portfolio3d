import React, { useState } from 'react';
import './App.css';
import Spline from '@splinetool/react-spline';

function App() {
  const [showDarkMode, setShowDarkMode] = useState(false)
  const lightMode = "https://prod.spline.design/VqE6SZu4SDOg3c-6/scene.splinecode";
  const darkMode = "https://prod.spline.design/eiqhbn7DxVbIf46H/scene.splinecode";

  const handleDarkModeSwitch = () => {
    setShowDarkMode(!showDarkMode);
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;
