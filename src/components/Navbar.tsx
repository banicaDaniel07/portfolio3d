import { NavLink, useLocation } from "react-router-dom";

import logo from '../assets/images/logo.png'
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const isHomePath = !location?.pathname?.replace('/', '');

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const handleCloseMenu = () => {
    setShowMenu(false);
  }

  const variants = {
    hidden: { y: '-500px' },
    visible: { y: 0 },
  };

  return (
    <header
      className='header'
      style={showMenu ? {
        backgroundColor: 'rgb(255 255 255)',
      } : isHomePath ? {
        backgroundColor: 'transparent'
      } : {
        backgroundColor: 'rgb(255 255 255 / 60%)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {showMenu ? (
        <div
          onClick={handleToggleMenu}
          className="fixed less-than-400:block hidden w-full h-full left-0 bottom-0 right-0 top-0"
        />
      ) : ''}
      <motion.ul
        variants={variants}
        initial={'hidden'}
        animate={showMenu ? 'visible' : 'hidden'}
        transition={{ duration: 0.1 }}
        className="bg-white calc-100vw-minus-2rem less-than-400:block hidden menu fixed left-0 right-0 pb-30 pb-3 ml-4 mr-4 rounded-xl top-20"
        style={{
          backdropFilter: 'blur(10px)',
        }}
      >
        <li className="flex justify-center">
          <NavLink
            onClick={handleToggleMenu}
            to='/about'
            className="text-black text-lg w-full flex justify-center"
          >
            About
          </NavLink>
        </li>
        <li className="flex justify-center">
          <NavLink
            onClick={handleToggleMenu}
            to='/projects'
            className="text-black text-lg w-full flex justify-center"
          >
            Projects
          </NavLink>
        </li>
      </motion.ul>
      <NavLink
        onClick={handleCloseMenu}
        to='/'
        className="z-50"
      >
        <img src={logo} alt='logo' className='w-12 h-12 object-contain' />
      </NavLink>
      <nav className='less-than-400:hidden flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-sky-400" : "text-black"}>
          Projects
        </NavLink>
      </nav>
      <nav className="less-than-400:block hidden text-black z-50">
        <label className="btn-circle swap swap-rotate">
          <input checked={showMenu} onChange={handleToggleMenu} type="checkbox" />
          {/* hamburger icon */}
          <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
          {/* close icon */}
          <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
        </label>
      </nav>
    </header>
  );
};

export default Navbar;
