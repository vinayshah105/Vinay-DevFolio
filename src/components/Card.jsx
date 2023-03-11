import React from 'react';
import { motion } from 'framer-motion';

const Card = () => {
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
      <a href="hello">
        <img
          className="rounded-t-lg w-full"
          src="https://codevoweb.com/wp-content/uploads/2022/02/how-to-build-a-fashion-ecommerce-website-with-html-css-scss-and-javascript.webp"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="helo">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Fashion-hub e-Commerce Store
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Online e-Commerce fashion Store, where you can find variety of fashion
          clothes and accessories. Also, there is one stop and shop for branded
          clothes.
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
