import React from "react";
import banImg from "../../assets/demo-restaurant-home-banner-pattern.png";
import { motion } from "framer-motion";
import { ArrowRight } from "react-feather";

const Banner = () => {
  const parentVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.7 },
    },
  };
  return (
    <motion.div className="absolute lg:top-0 sm:top-16">
      <motion.div
        className="mx-auto flex opacity-light flex-col items-center justify-center rounded-full lg:w-[700px] lg:h-[700px] md:w-[500px] md:h-[500px] sm:w-[450px] sm:h-[450px] w-[320px] h-[320px]"
        variants={parentVariants}
        initial="hidden"
        animate="show"
        style={{
          backgroundImage: `url(${banImg})`,
          backgroundColor: "#d39121",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="text-center relative z-10">
          <p className="text-black sm:text-[26px] mb-[15px] text-[17px] font-normal uppercase sm:mb-[15px] ">
            Experience the taste of Italy
          </p>
        </div>

        <div className="flex flex-col justify-center items-center lg:mb-6 mb-3">
          <span
            className="text-6xl md:text-[95px] lg:text-[110px] sm:text-[82px] w-max text-outline leading-none"
            style={{
              wordSpacing: "0",
              WebkitTextStroke: "1px white",
              color: "transparent",
              textShadow: "2px 2px #d39121",
            }}
          >
            GREAT DINING
          </span>
          <span className="w-max text-center text-6xl sm:text-[82px] md:text-[95px] lg:text-[110px]  text-white  leading-none">
            {"EXPERIENCE".split("").map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </span>
        </div>

        <div variants={childVariants}>
          <motion.button
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative bg-customGray flex flex-row font-medium items-center justify-center text-white lg:px-8 lg:py-5  pt-4 pb-4 px-4 text-lg rounded-[4px] overflow-hidden"
          >
            <motion.span
              className="absolute lg:left-10 lg:top-4 top-3 left-5"
              variants={{
                rest: {
                  opacity: 1,
                  y: 0,
                },
                hover: {
                  opacity: 0,
                  y: "-200%",
                },
              }}
              transition={{
                opacity: { duration: 0.7 },
              }}
            >
              AUTHENTIC EXPERIENCE
            </motion.span>

            <motion.span
              className="absolute lg:left-10 lg:top-4 top-3 left-5"
              variants={{
                rest: {
                  opacity: 0,
                  y: "200%",
                },
                hover: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                opacity: { duration: 0.7 },
              }}
            >
              AUTHENTIC EXPERIENCE
            </motion.span>

            <ArrowRight className="text-white ml-36" size={20} />
          </motion.button>
        </div>

        <motion.img
          variants={childVariants}
          className="absolute hidden lg:flex -right-12 xl:w-[210px] xl:h-[210px] h-[150px] w-[150px] z-10 bottom-10 animation-float "
          src="https://craftohtml.themezaa.com/images/demo-restaurant-home-01.png"
          alt=""
          animate={{
            y: ["0px", "-10px", "0px"],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
