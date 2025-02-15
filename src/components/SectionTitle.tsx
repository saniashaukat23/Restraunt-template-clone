import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLocation } from "react-router-dom";

type SectionTitleProps = {
  subtitle: string;
  title: string;
  font?: string; // ✅ Make 'font' optional
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  font,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const location = useLocation();
  const isContactUs = location.pathname === "/contact";
  const isStory = location.pathname === "/story";

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col ${
        isContactUs
          ? "justify-start items-start"
          : "justify-center items-center"
      }`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
            ease: "easeInOut",
          },
        },
      }}
    >
      <motion.span
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-customRed text-base font-schibsted uppercase mb-5 font-bold"
      >
        {isContactUs ? subtitle : `- ${subtitle} -`}
      </motion.span>
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className={`relative z-20 ${
          font ? `lg:text-[${font}]` : "lg:text-[3.438rem]"
        } text-customDarkGray lg:mb-16 mb-6 ${
          isContactUs ? "flex w-2/3 flex-wrap " : ""
        } ${
          isStory
            ? "md:text-4xl sm:text-3xl text-xl"
            : "text-[42px]  leading-[3.2rem]"
        }`}
      >
        {title}
      </motion.p>
    </motion.div>
  );
};

export default SectionTitle;
