import React from "react";
import { motion } from "framer-motion";
import { PhoneOutgoing } from "react-feather";
import { useLocation } from "react-router-dom";

type ContentTextProps = {
  title: string;
  title2: string;
  text: string;
  btnText: string;
};

const ContentText: React.FC<ContentTextProps> = ({
  title,
  title2,
  text,
  btnText,
}) => {
  const location = useLocation();
  const homeStyle = location.pathname === "/" ? "mt-28" : "";


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={`${homeStyle}`}
    >
      <motion.div
        variants={itemVariants}
        className="lg:mt-10 flex items-center mb-8"
      >
        <span className="flex w-[70px] h-[2px] bg-customRed mr-4"></span>
        <span className="text-customRed lg:text-lg text-sm font-medium uppercase font-schibsted">
          {title}
        </span>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="lg:text-[4.5rem] m-0 w-4/5 text-wrap text-5xl sm:text-[53px] mb-3 text-customDarkGray tracking-tight"
      >
        {title2}
      </motion.p>

      <motion.p
        variants={itemVariants}
        className="lg:w-2/3 w-11/12 mb-6 text-[17px] leading-7 opacity-90 font-schibsted text-customLightGray"
      >
        {text}
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="mt-[10px] flex lg:gap-10 gap-5 mb-5"
      >
        <motion.a
          href="demo-restaurant-about.html"
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="relative bg-customDarkGray lg:w-1/3 w-[47%] md:w-[25%] sm:w-[32%] flex flex-row items-center justify-center text-white lg:px-4 lg:py-7 px-5 py-7 text-lg rounded-[4px] overflow-hidden"
        >
          <motion.span
            className="btn-double-text absolute md:top-4 top-5"
            variants={{
              rest: { opacity: 1, y: 0 },
              hover: { opacity: 0, y: "-200%" },
            }}
            transition={{ opacity: { duration: 0.6 } }}
            data-text="About restaurant"
          >
            {btnText}
          </motion.span>
          <motion.span
            className="btn-double-text absolute md:top-4 top-5"
            variants={{
              rest: { opacity: 0, y: "200%" },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ opacity: { duration: 0.6 } }}
          >
            {btnText}
          </motion.span>
        </motion.a>
        <div className="flex items-center">
          <PhoneOutgoing className="mr-2 text-cusBg h-auto lg:w-8 w-6" />
          <a href="tel:1800222000" className="text-customDarkGray text-2xl">
            1-800-222-000
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContentText;
