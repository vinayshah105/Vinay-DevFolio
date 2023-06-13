import React from 'react';
import { motion } from 'framer-motion';

const Card1 = () => {
  return (
    <motion.div
      initial={'hidden'}
      whileInView={'visible'}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <a href="https://remax-realtor.netlify.app/" target="blank">
        <img
          className="rounded-t-lg w-full"
          src="https://mycodelesswebsite.com/wp-content/uploads/2020/04/Kimelton-Realtor-Real-Estate-Website-Example.jpg"
          alt="Re-Max Realtor"
        />
      </a>
      <div className="p-5">
        <a href="https://remax-realtor.netlify.app/" target="blank">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Re-Max Realtor - One Stop For Sell/Buy Property
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          ReMax is online community where you can find Decent property to buy or
          sell as per good market price and getting good customers. Here you can
          see 3D View of property to get closer look. Also you can directly
          contact with our team for further consideration.
        </p>
      </div>
    </motion.div>
  );
};

export default Card1;
