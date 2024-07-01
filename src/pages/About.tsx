import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { scrollTop } from "../utils/style-utils";

const About = () => {
  const [lastIndex, setLastIndex] = useState(1);

  useEffect(() => {
    scrollTop();
    const intervalId = setInterval(() => {
      setLastIndex(lastIndex => {
        if (lastIndex < skills.length) {
          return lastIndex + 1;
        } else {
          clearInterval(intervalId);
          return lastIndex;
        }
      });
    }, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className='max-container'>
      <h1 className='about-title head-text'>
        Hello, <br className="about-break" /> I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Daniel
        </span>{" "}
        👋
      </h1>

      <div className='about-description mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Software Engineer based in Romania, specializing in full-stack development to
          design, develop, and deploy end-to-end web applications, combining expertise in
          both front-end and backend technologies.
        </p>
      </div>

      <div className='about-skills-title py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='about-skills-description mt-16 flex flex-wrap gap-12'>
          {skills.slice(0, lastIndex).map((skill) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.1 }}
              className="tooltip tooltip-top" data-tip={skill.name}>
              <div className='block-container w-20 h-20 cursor-pointer' key={skill.name}>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='about-experience-title subhead-text'>Work Experience.</h3>
        <div className='about-experience-description mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Seasoned professional with a diverse background, continuously enhancing
            skills and collaborating with talented peers. Currently driving innovation
            and excellence in my current role, where I thrive on challenges and teamwork
            to deliver outstanding results.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='about-timeline-title text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='about-timeline-subtitle text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='about-timeline-description my-5 ml-5 mt-1'>
                  {experience.points.map((point, index) => point.includes('Title: ') ? (
                    <li className='text-black-500/50 font-semibold mt-2'>
                      {point.replace('Title: ', '')}
                    </li>
                  ) : (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal text-sm list-disc my-1'
                      style={{ marginTop: '0 !important' }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
