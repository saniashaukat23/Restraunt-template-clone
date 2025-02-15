import { useRef } from "react";
import Stars from "../Stars";
import { motion, useInView } from "framer-motion";

const RatingBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="p-5 gap-5 flex flex-col lg:flex-row items-center justify-center lg:absolute left-[20%] -bottom-9 z-10 rounded-[100px] bg-white lg:w-[65%] lg:py-5 lg:px-16"
      >
        <div className="px-[15px] bg-[#fd961e] rounded-3xl inline-block">
          <div className="flex leading-[2.25rem] h-[36px] justify-center items-center">
            <Stars color={"white"} />
          </div>
        </div>
        <p className="font-schibsted text-[18px] font-medium text-center">
          <span className="font-semibold border-b-2 border-black pb-.5 ">
            25,000+ happy food lovers{" "}
          </span>
          visited our authentic restaurant.
        </p>
      </motion.div>
    </>
  );
};

export default RatingBar;
