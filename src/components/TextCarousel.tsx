import React from "react";
import { motion } from "framer-motion";

const TextCarousel = () => {
  const items = [
    "Delicious",
    "Awesome",
    "Experience",
    "Cuisine",
    "Delicious",
    "Awesome",
    "Experience",
    "Cuisine",
  ];

  return (
    <>
      <motion.div
        className="flex gap-12"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className={`lg:text-[150px] text-[7rem] flex items-center justify-center snap-center m-2 rounded-lg leading-none
              ${index % 2 === 0 ? "text-customGray" : "outline-text"}`}
          >
            {item}
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default TextCarousel;
