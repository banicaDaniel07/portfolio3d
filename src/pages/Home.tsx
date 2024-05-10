import { Suspense, useEffect, useRef, useState } from "react";

// import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from "../assets/icons";
import HomeInfo from "../components/HomeInfo";
import Spline from "@splinetool/react-spline";

const Home = () => {
  const [showDarkMode, setShowDarkMode] = useState(false)
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const lightMode = "https://prod.spline.design/VqE6SZu4SDOg3c-6/scene.splinecode";
  const darkMode = 'https://prod.spline.design/eiqhbn7DxVbIf46H/scene.splinecode';
  const audioRef = useRef(new Audio(''));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const handleDarkModeSwitch = () => {
    setTimeout(() => {
      setShowDarkMode(!showDarkMode);
    }, 200)
  }

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        <HomeInfo />
      </div>

      <div className="w-screen h-screen">
        <Spline scene={showDarkMode ? darkMode : lightMode} />
      </div>

      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>

      <div className='absolute bottom-2 right-2'>
        <input
          type="checkbox"
          onClick={handleDarkModeSwitch}
          value="synthwave"
          className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2 mt-2 ml-2"
          defaultChecked
        />
      </div>
    </section>
  );
};

export default Home;

