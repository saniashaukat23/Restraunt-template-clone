import React, { useState } from "react";
import HeroSection from "../HeroSection";
import { Play } from "react-feather";
import { motion } from "framer-motion";
import { BiX } from "react-icons/bi";
import SectionTitle from "../SectionTitle";
import FooterSection from "../FooterSection";
import HorizontalGallery from "./HorizontalGallery";
import AwardsSection from "./AwardSection";

const Story = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const galleryImages = [
    "https://craftohtml.themezaa.com/images/demo-restaurant-story-02.jpg",
    "https://craftohtml.themezaa.com/images/demo-restaurant-story-03.jpg",
    "https://craftohtml.themezaa.com/images/demo-restaurant-story-04.jpg",
    "https://craftohtml.themezaa.com/images/demo-restaurant-story-05.jpg",
    "https://craftohtml.themezaa.com/images/demo-restaurant-story-06.jpg",
    "https://craftohtml.themezaa.com/images/demo-restaurant-story-07.jpg",
  ];

  return (
    <>
      <HeroSection
        heading={"OUR STORY"}
        subheading={"- RESTAURANT SUCCESS -"}
      />
      <section className="w-full  h-full pb-24">
        <div className="lg:mx-container md:mx-20 mx-10  relative">
          <img
            src="https://craftohtml.themezaa.com/images/demo-restaurant-story-01.jpg"
            alt="Restaurant Story"
            className="rounded-md w-full h-auto object-cover "
          />

          <div className="absolute inset-0 flex flex-row gap-4  justify-center items-center">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl "
            >
              OUR
            </motion.p>
            <motion.button
              onClick={() => setIsVideoPlaying(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 sm:h-16 sm:w-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center relative hover:bg-opacity-90 transition-all duration-300"
              aria-label="Play Video"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.3, scale: 1.2 }}
                transition={{
                  ease: "easeInOut",
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="absolute hidden sm:flex sm:top-0 sm:left-0 md:-top-2 md:-left-2 w-10 h-10 sm:h-16 sm:w-16  md:w-24 md:h-24 bg-white  rounded-full "
              ></motion.span>
              <Play size={24} className="text-gray-900 size-5" />
            </motion.button>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl "
            >
              STORY
            </motion.p>
          </div>
        </div>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-4xl mx-4">
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute -top-12 right-0 md:-right-12 text-white hover:text-gray-300 transition-colors duration-300"
                aria-label="Close Video"
              >
                <BiX size={32} />
              </button>
              <iframe
                className="w-full aspect-video rounded-lg shadow-2xl"
                src="https://www.youtube.com/embed/cfXHhfNy7tU?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Our Story Video"
              ></iframe>
            </div>
          </motion.div>
        )}
      </section>
      <section className="pt-24 bg-cusLightBg">
        <div className="md:mx-container mx-10 flex justify-center items-center">
          <div className="w-full md:w-[60%] text-center px-4 md:px-0">
            <SectionTitle
              subtitle={"Our Last 16 Years Journey"}
              title={
                "We are a passionate team dedicated to rediscovering and reliving traditional Romanian delicacies. Our journey is a testament to our love for authentic and flavorful food."
              }
              font={"45px"}
            />
          </div>
        </div>
      </section>
      <HorizontalGallery images={galleryImages} />
      <AwardsSection />
      <FooterSection />
    </>
  );
};

export default Story;
