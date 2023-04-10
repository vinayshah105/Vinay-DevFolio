import React, { useContext } from 'react';
import heroBg from '../assets/webdev.svg';
import Typical from 'react-typical';
import { contactLinks } from '../constants';
import { ThemeContext } from '../themeProvider';
import { motion } from 'framer-motion';
import cloud from '../assets/cloudBg.png';
import cloudDark from '../assets/cloudDark.png';
import resume from '../assets/Vinay_Shah_Resume.pdf';

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        style={
          darkMode
            ? { backgroundImage: `url('${cloud}')`, backgroundSize: 'cover' }
            : { backgroundImage: `url('${cloudDark}'`, backgroundSize: 'cover' }
        }
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <motion.span
                className={darkMode ? 'block text-black' : ' text-white'}
              >
                Hi👋 I am Vinay Shah
              </motion.span>
              <span className="block text-blue-600 z-0 lg:inline">
                <Typical
                  steps={[
                    'Full Stack Developer',
                    1500,
                    'MERN Developer',
                    1500,
                    'React Developer',
                    1500,
                  ]}
                  loop={Infinity}
                />
              </span>
            </h1>
            <ul>
              <li
                className={
                  darkMode
                    ? 'mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'
                    : 'mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'
                }
              >
                I am a Full-Stack Web Developer with more than 3 years of
                extensive and applied experience in building web applications
                using different technologies.
              </li>

              <li
                className={
                  darkMode
                    ? 'mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'
                    : 'mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'
                }
              >
                Now I am looking for a Intermediate role as Full Stack Developer
                for new challenges and career growth. <br />
                Your help would be much appreciated.
              </li>
            </ul>
            <div className="flex md:justify-start ">
              {contactLinks.map((el) => (
                <a
                  href={el.link}
                  target=" blank"
                  className="mr-5 cursor-pointer mt-8 hover:scale-125"
                  key={el.name}
                >
                  <img
                    alt={el.name}
                    src={el.url}
                    style={{ height: '2rem', width: '2rem' }}
                  />
                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                <a
                  href={resume}
                  download="Vinay_Shah_Resume"
                  className="items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-gray-900 md:py-4 md:text-lg md:px-10"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
          <motion.img
            initial="hidden"
            whileInView={'visible'}
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
            src={heroBg}
            alt=""
            className="md:w-3/6 hidden sm:block"
          />
        </main>
      </div>
    </>
  );
};

export default Home;
