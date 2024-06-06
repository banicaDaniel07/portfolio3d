import { IProject, projects } from "../constants";
import CTA from "../components/CTA";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';
import application from '../assets/images/application.png'
import linkedin from '../assets/icons/linkedin.svg';
import instagram from '../assets/icons/instagram.svg';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]);

const Projects = () => {
  const [selectedItem, setSelectedItem] = useState<IProject | null>(null);
  const [lastIndex, setLastIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLastIndex(lastIndex => {
        if (lastIndex < 9) {
          return lastIndex + 1;
        } else {
          clearInterval(intervalId);
          return lastIndex;
        }
      });
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          {'Projects'.slice(0, lastIndex)}
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

      <div className='overflow-hidden'>
        <motion.div
          initial={{ translateY: 380, scale: 0 }}
          animate={{ translateY: 0, scale: 1 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'relative'
          }}
        >
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              slideShadows: false,
            }}
            loop
            autoplay={{ delay: 3000 }}
            slidesPerView={2}
            className="m-0 w-full grid relative gap-6 px-12 py-16 my-10 p-4"
            style={{
              backgroundColor: '#F5F7F9',
              height: 380
            }}
          >
            {projects.map((item) => (
              <SwiperSlide key={item.id} className='h-full'>
                <motion.div
                  className='bg-center bg-no-repeat bg-cover rounded-lg will-change-transform bg-slate-500 flex flex-col items-center justify-center cursor-pointer h-full my-10'
                  style={{
                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                    backgroundImage: `url(${item.tumbnail})`,
                    width: 450,
                    height: 300,
                  }}
                  whileHover={{ boxShadow: 'rgba(100, 100, 111, 0.5) 0px 7px 29px 0px' }}
                  layoutId={item.id}
                  onClick={() => setSelectedItem(item)}
                >
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <AnimatePresence>
            {selectedItem?.id && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  className='fixed inset-0 z-20'
                  style={{
                    backgroundColor: '#f5f7f9b3'
                  }}
                />
                <div className='fixed flex items-center justify-center inset-0 z-30'>
                  <motion.div
                    layoutId={selectedItem?.id}
                    className=' relative rounded-xl flex flex-col justify-center items-center cursor-pointer shadow-2xl text-4xl'
                    style={{
                      backgroundColor: '#d2d2d2',
                      width: 900,
                      height: 600,
                    }}
                  >
                    <div className='grid_container'>
                      <div className="box title flex items-center justify-center">
                        {selectedItem?.title}
                      </div>
                      <div className="box close">
                        <button
                          className="btn btn-square btn-outline btn-error rounded-2xl h-full w-full bg-red-100"
                          onClick={() => setSelectedItem(null)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                      </div>
                      <div
                        className="box mobile bg-center bg-no-repeat bg-contain"
                        style={{
                          backgroundImage: `url(${selectedItem.mobile})`,
                        }}
                      />
                      <div
                        className="box image bg-center bg-no-repeat bg-contain"
                        style={{
                          backgroundImage: `url(${selectedItem.desktop})`,
                        }}
                      />
                      <div className="box view">
                        <a href={selectedItem.website} target='_blank'>
                          <button className="btn btn-outline btn-success rounded-2xl h-full w-full bg-green-100">
                            Open Website
                            <img src={application} />
                          </button>
                        </a>
                      </div>
                      <div className="box social">
                        <button
                          className="btn btn-square btn-outline rounded-2xl h-full w-full"
                        >
                          <a href={selectedItem.social} target='_blank'>
                            <img className='h-7 w-7' src={selectedItem?.social?.includes('linkedin') ? linkedin : instagram} />
                          </a>
                        </button>
                      </div>
                      <div className="box owner flex justify-center items-center font-semibold">
                        <span className='text-sm uppercase px-2 text-center'>
                          {selectedItem?.owner}
                        </span>
                      </div>
                      <div className="box description flex justify-center items-center font-extralight">
                        <span className="text-sm text-center p-1 uppercase">
                          {selectedItem?.description}
                        </span>
                      </div>
                    </div>

                  </motion.div>
                </div>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
