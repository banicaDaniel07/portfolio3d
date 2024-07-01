import { socialLinks } from "../constants";

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
            <div
              className="hover:scale-105">
              <div onClick={() => handleLinkClicked(link.link)} className=" cursor-pointer" key={link.name}>
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className='w-6 h-6 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
