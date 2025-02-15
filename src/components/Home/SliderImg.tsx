import React from "react";
import { motion } from "framer-motion";

const SliderImg = ({ image, title, price, text1, text2, text3 }) => {
  return (
    <motion.div
      className="flex flex-col items-center   w-full max-w-[340px] mx-auto px-4"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <div className="relative w-full">
        <img
          className="rounded-md w-full  h-auto object-cover"
          src={image}
          alt={title}
        />
        <div className="flex justify-center items-center  absolute inset-0 rounded-md">
          <motion.div
            className="absolute inset-0 bg-black rounded-md z-10"
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 0.5 },
            }}
            transition={{ duration: 0.3 }}
          ></motion.div>
          <motion.div
            className="h-[120px] w-[120px] bg-white rounded-full flex flex-col text-customRed justify-center items-center text-xl font-bold z-20"
            variants={{
              rest: { opacity: 0, y: "10%" },
              hover: { opacity: 1, y: "0%" },
            }}
            transition={{ duration: 0.3 }}
          >
            <p>Just</p>
            <span>{price}</span>
          </motion.div>
        </div>
      </div>
      <p className="pt-[30px] font-medium text-[19px] font-schibsted leading-7 text-center">
        {title}
      </p>
      <div className="font-schibsted font-medium text-[17px] leading-7 text-customMediumGray flex items-center justify-center gap-4">
        <span>{text1}</span>
        <div className="bg-gray-600 opacity-30 w-2 h-2 rounded-full"></div>
        <span>{text2}</span>
        <div className="bg-gray-600 opacity-30 w-2 h-2 rounded-full"></div>
        <span>{text3}</span>
      </div>
    </motion.div>
  );
};

export default SliderImg;
