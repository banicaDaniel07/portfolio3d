import { projects } from "../constants";
import CTA from "../components/CTA";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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

      <div style={{
        position: 'relative'
      }}>
        <div className="container grid-cols-2fr-1fr-2fr" style={{
          borderRadius: 12,
          gridGap: '1.5rem',
          padding: '3rem',
          background: 'linear-gradient(135deg,#b1f,#a0f)',
        }}>
          {projects.map((item) => (
            <motion.div
              className={' kid' + item.id}
              style={{
                height: 200,
                willChange: 'transform',
                background: '#fff',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 3px 0 rgba(0, 0, 0, .1), 0 10px min(calc(1rem*(15 /(18 + .167* 2)))), 15px) 0 rgba(0, 0, 0, .06)'
              }}
              key={item.id}
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
            >
              <motion.h5>{item.subtitle}</motion.h5>
              <motion.h2>{item.title}</motion.h2>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg,#b1f,#a0f)'
                }}
              >
              </motion.div>
              <div style={{
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                background: 'transparent',
                boxShadow: '0 2px 3px 0 rgba(0, 0, 0, .1), 0 10px min(calc(1rem* 15), 15px) 0 rgba(0, 0, 0, .06)'
              }}>
                <motion.div
                  layoutId={selectedId}
                  style={{
                    backgroundColor: '#fff',
                    width: 650,
                    height: 350,
                    borderRadius: 12,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
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
