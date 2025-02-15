import { motion } from "framer-motion";

type HeroSectionProps = {
  heading: string;
  subheading: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({ heading, subheading }) => {
  return (
    <section
      className="relative flex justify-center items-start h-[60vh] w-full"
      aria-label="hero-section"
    >
      <div
        className="w-full absolute "
        style={{
          backgroundImage:
            "url('https://craftohtml.themezaa.com/images/demo-restaurant-about-title-bg.jpg')",
          backgroundSize: "140%",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: "-20px" }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center items-center flex-col mt-24"
      >
        <p className="text-[5rem] text-customDarkGray leading-[5rem] mt-12">
          {heading}
        </p>
        <span className="text-customRed font-schibsted mb-[10px] font-semibold uppercase">
          {subheading}
        </span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
