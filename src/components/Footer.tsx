import { Link } from "react-router-dom";

import { socialLinks } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {

  const handleLinkClicked = (link: string) => {
    window.open(
      link,
      "_blank"
    );
  }

  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © 2023 <strong>Banica Daniel</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.1 }}
              className="tooltip tooltip-top" data-tip={link.name}>
              <div onClick={() => handleLinkClicked(link.link)} className=" cursor-pointer" key={link.name}>
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className='w-6 h-6 object-contain'
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
