import React, { useContext } from 'react';
import { techStack } from '../constants';
import { ThemeContext } from '../themeProvider';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode === true ? 'bg-white' : 'bg-gray-900'}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? 'text-5xl font-bold px-4 md:px-0 text-center'
              : 'text-5xl font-bold px-4 md:px-0 text-center text-white'
          }
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Me in a nutshell
            </h4>
            <div className="profile-parent">
              <div
                className={
                  darkMode
                    ? 'mt-4 text-xl text-justify text-gray-500'
                    : 'mt-4 text-xl text-justify text-white'
                }
              >
                <p>
                  I'm a Toronto-based performance-focused Software Developer
                  with more than 2 years of experience in and developing Web
                  Applications from scratch to production and maintenance using{' '}
                  <b> MERN Stack web development </b> technologies. I am
                  dedicated to constantly improving tools and infrastructure to
                  maximize productivity, minimize system downtime, and quickly
                  respond to the changing needs of the business. Able to
                  understand problems and find positive solutions using
                  troubleshooting, problem-solving, teaming, and communication
                  skills.
                  <br />
                  <br />I think it’s important to get regular screen downtime,
                  so when I’m not pushing pixels, you’ll find me in GYM,
                  swimming pool or in my kitchen. Also, i like to spend some
                  quality time with my friends or family.
                </p>
              </div>
              <div className="profile-picture">
                <div className="profile-picture-background"></div>
              </div>
            </div>
          </motion.div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Tech Stack
            </h4>
            <p
              className={
                darkMode
                  ? 'mt-4 text-xl text-justify text-gray-500'
                  : 'mt-4 text-xl text-justify text-white'
              }
            >
              Using a combination of cutting-edge technologies and reliable
              open-source software I build user-focused, performant apps and
              websites for smartphones, tablets, and desktops.
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between ">
            {techStack.map((el, index) => (
              <motion.div
                initial="hidden"
                whileInView={'visible'}
                key={el.name}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: 'spring',
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
