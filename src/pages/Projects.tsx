import { projects } from "../constants";
import CTA from "../components/CTA";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]);

const Projects = () => {
  const [selectedId, setSelectedId] = useState<any>(null)

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        Throughout my professional journey, I've undertaken a diverse array of projects,
        each presenting unique challenges and opportunities for growth.
        From pioneering initiatives with startups to contributing innovative
        solutions within my current role, I've honed my skills and expertise across
        various domains. My commitment to excellence and passion for innovation drive
        me to consistently deliver impactful results, making meaningful contributions to
        every project I undertake.
        Your collaboration is highly valued!
      </p>

      <div>
        <Swiper
          effect="coverflow" // Set the effect to coverflow
          grabCursor={true} // Enable grab cursor
          centeredSlides={true} // Center the active slide
          coverflowEffect={{
            slideShadows: false, // Enable slide shadows
          }}
          loop
          // autoplay={{ delay: 3000 }}
          slidesPerView={2}
          className="m-0 w-full grid relative gap-6 px-12 py-16 my-10 p-4"
          style={{
            backgroundColor: '#F5F7F9',
            height: 380
          }}
        >
          {projects.map((item) => (
            <SwiperSlide className='h-full'            >
              <motion.div
                className='bg-center bg-no-repeat bg-cover rounded-lg will-change-transform bg-slate-500 flex flex-col items-center justify-center cursor-pointer h-full my-10'
                style={{
                  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                  backgroundImage: `url(${item.image})`,
                  width: 450,
                  height: 300,
                }}
                whileHover={{ boxShadow: 'rgba(100, 100, 111, 0.5) 0px 7px 29px 0px' }}
                key={item.id}
                layoutId={item.id}
                onClick={() => setSelectedId(item.id)}
              >
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className='absolute w-full h-full top-0 left-0 right-0 bottom-0 rounded-xl z-20'
                style={{
                  backgroundColor: '#f5f7f999'
                }}
              />
              <div
                className='absolute flex items-center justify-center w-full h-full top-0 left-0 right-0 bottom-0 bg-transparent z-30'
              >
                <motion.div
                  layoutId={selectedId}
                  className='bg-white rounded-xl flex flex-col justify-center items-center cursor-pointer shadow-lg'
                  style={{
                    width: 900,
                    height: 600,
                  }}
                >
                  <motion.h5>{projects.find((item) => item.id === selectedId)?.subtitle}</motion.h5>
                  <motion.h2>{projects.find((item) => item.id === selectedId)?.title}</motion.h2>
                  <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
