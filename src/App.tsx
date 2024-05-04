import React, { useState } from 'react';
import './App.css';
import Spline from '@splinetool/react-spline';

function App() {
  const [showDarkMode, setShowDarkMode] = useState(false)
  const lightMode = "https://prod.spline.design/VqE6SZu4SDOg3c-6/scene.splinecode";
  const darkMode = "https://prod.spline.design/eiqhbn7DxVbIf46H/scene.splinecode";

  const handleDarkModeSwitch = () => {
    setTimeout(() => {
      setShowDarkMode(!showDarkMode);
    }, 200)
  }

  return (
    <div className="App">
      <div className="absolute w-screen top-0 right-0 left-0 bg-transparent">
        <input
          type="checkbox"
          onClick={handleDarkModeSwitch}
          value="synthwave"
          className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2 mt-2 ml-2"
          defaultChecked
        />
      </div>
      <div className="w-screen h-screen">
        <Spline scene={showDarkMode ? darkMode : lightMode} />
      </div>
    </div>
  );
}

export default App;
