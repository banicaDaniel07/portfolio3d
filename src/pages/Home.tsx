import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

// @ts-ignore
import sakura from '../assets/sakura.mp3';
import soundoff from '../assets/images/soundoff.png'
import soundon from '../assets/images/soundon.png'
import HomeInfo from "../components/HomeInfo";
import Spline from "@splinetool/react-spline";
import { addScrollToMain, removeScrollFromMain } from "../utils/style-utils";
import { LIGHT_MODE_ANIMATION } from "../utils/constants";

const Home = () => {
  // const [showDarkMode, setShowDarkMode] = useState(false)
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [grabbing, setGrabbing] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  // const handleDarkModeSwitch = () => {
  //   setTimeout(() => {
  //     setShowDarkMode(!showDarkMode);
  //     setLoaded(false);
  //   }, 200)
  // }

  useEffect(() => {
    removeScrollFromMain();
    return () => {
      addScrollToMain();
    };
  }, [])

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlayingMusic) {
      audio.play();
    }

    return () => {
      audio.pause();
    };
  }, [isPlayingMusic, audioRef]);

  const handleMouseDown = () => {
    setGrabbing(true);
  }

  const handleMouseUp = () => {
    setGrabbing(false);
  }

  const handleLoaded = () => {
    setLoaded(true);
  }

  return (
    <section className='w-full h-full'>
      <AnimatePresence>
        <motion.div
          className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: "-50px", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            exit={{ y: "-50px", opacity: 0 }}
          >
            <HomeInfo />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div
        className="w-screen h-screen"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        <Spline
          className={loaded ? 'opacity-100' : 'opacity-0'}
          style={{ cursor: grabbing ? 'grabbing' : 'grab' }}
          // scene={showDarkMode ? darkMode : lightMode}
          scene={LIGHT_MODE_ANIMATION}
          onLoad={handleLoaded}
        />

      </div>

      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>

      {/* <div className='absolute bottom-2 right-2'>
        <input
          type="checkbox"
          onClick={handleDarkModeSwitch}
          value="synthwave"
          className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2 mt-2 ml-2"
          defaultChecked
        />
      </div> */}

      {!loaded ? (
        <div className="fixed w-full h-full top-0 left-0 bottom-0 right-0 flex justify-center items-center">
          <span className="loader"></span>
        </div>
      ) : ''}
    </section>
  );
};

export default Home;

