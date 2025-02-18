import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind? <br />
        Let’s build something together!
      </p>
      <Link to='/contact' className='btn text-white !w-24 hover:scale-105'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
