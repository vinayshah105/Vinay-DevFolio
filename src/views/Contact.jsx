import React, { useContext } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      id="contact"
      className={
        darkMode
          ? "bg-gray-100 pt-24 md:h-screen"
          : "bg-black pt-24 text-white md:h-screen"
      }
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">
          Contact
        </h2>
        <div>
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">
          Let's Talk ?
          </h4>
          <p className="text-gray-500 text-xl">
            If you want to know more about me or my work, or if you would just
            <br />
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>
        <div className="flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-24">
          <div className="w-full md:pr-8">
            <form>
              <div className="my-6">
                <label
                  htmlFor="name"
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className={
                    darkMode
                      ? "block mb-2 text-lg font-medium text-gray-900"
                      : "block mb-2 text-lg font-medium text-white"
                  }
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="flex justify-between ">
                <div className="underline">
                  <a href="https://mail.google.com/mail/u/1/#inbox?compose=new" target=' blank'>
                    Send me email directly
                  </a>
                </div>
                <button className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400">
                  <a href="mailto:shahvinay1005.sv@gmail.com">Submit</a>
                </button>
              </div>
            </form>
          </div>
          <div className="w-full flex flex-col md:items-end  mt-12 md:mt-6">
             <h1 className="text-3xl font-bold">Phone</h1>
            <a
              href="tel:+1(519)2008385"
              className="mb-12 mt-4 font-semibold text-blue-700 block uppercase" target=' blank'
            >
              +1 (519)-***-**85
            </a> 
            <h1 className="text-3xl font-bold">Email</h1>
            <a
              href="https://mail.google.com/mail/u/1/#inbox?compose=new" target=" blank"
              className="mb-12 mt-4 font-semibold text-blue-700 block uppercase"
            >
              shahvinay1005.sv@gmail.com
            </a>
            <h1 className="text-3xl  font-bold">Address</h1>
            <a
              href="https://www.google.com/maps/place/18+Tamarisk+Dr,+Etobicoke,+ON+M9V+1S3/@43.7331392,-79.5990129,17z/data=!3m1!4b1!4m6!3m5!1s0x882b3a57aab95841:0x8d0919fe1f983c9e!8m2!3d43.7331353!4d-79.5968242!16s%2Fg%2F11c2cj6vdy"
              className="mt-4  mb-12 md:text-right font-semibold text-blue-700 block uppercase" target=' blank'
            >
              18, Tamarisk Drive, Etobicoke, ON, M9V 3X2
              <br />
              CANADA
            </a>
            <h1 className="text-3xl  font-bold">Social</h1>
            <ul className="flex">
              {contactLinks.map((el) => (
                <a
                  href={el.link}
                  className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                  target=' blank' key={el.name}
                >
                  <img alt={el.name} src={el.url} style={{height:'2rem', width: '2rem'}} />
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={
          darkMode
            ? "w-full bg-white text-black text-lg py-3 flex justify-center "
            : "w-full bg-gray-900 text-white text-lg py-3 flex justify-center"
        }
      >
       &copy; Copyright 2023 by 	&#160; <a href="https://www.instagram.com/vish__105/" target=' blank'>Vinay Shah</a>
      </div>
    </div>
  );
};

export default Contact;
