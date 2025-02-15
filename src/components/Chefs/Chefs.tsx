import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import HeroSection from "../HeroSection";
import SectionTitle from "../SectionTitle";
import ChefCard from "./ChefCard";
import FooterSection from "../FooterSection";

interface Chef {
  imageUrl: string;
  name: string;
  cuisine: string;
}

const Chefs: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls1.start({
      opacity: 1,
      x: scrollDirection === "up" ? 100 : -20,
    });
  }, [scrollDirection, controls1]);

  const y1 = useTransform(scrollYProgress, [0, 0.7], [0, -400]);
  const y2 = useTransform(scrollYProgress, [0, 0.7], [0, 400]);

  const chefs: Chef[] = [
    {
      imageUrl:
        "https://craftohtml.themezaa.com/images/demo-restaurant-the-chefs-01.jpg",
      name: "John Richards",
      cuisine: "Indian Cuisine",
    },
    {
      imageUrl:
        "https://craftohtml.themezaa.com/images/demo-restaurant-the-chefs-02.jpg",
      name: "Queen Ferrari",
      cuisine: "Chinese Cuisine",
    },
    {
      imageUrl:
        "https://craftohtml.themezaa.com/images/demo-restaurant-the-chefs-03.jpg",
      name: "Marta Warner",
      cuisine: "Italian Cuisine",
    },
    {
      imageUrl:
        "https://craftohtml.themezaa.com/images/demo-restaurant-the-chefs-04.jpg",
      name: "Lucky Green",
      cuisine: "Greek Cuisine",
    },
    {
      imageUrl:
        "https://craftohtml.themezaa.com/images/demo-restaurant-the-chefs-05.jpg",
      name: "Taylor Habbant",
      cuisine: "Spanish Cuisine",
    },
    {
      imageUrl:
        "https://craftohtml.themezaa.com/images/demo-restaurant-the-chefs-06.jpg",
      name: "Antony Taylor",
      cuisine: "Indian Cuisine",
    },
  ];

  return (
    <>
      <HeroSection heading="Our Chef" subheading="- Meet Professionals -" />

      {/* Head Chef Section */}
      <section className="mx-container py-10">
        <motion.div style={{ y: y1 }} className="h-max w-max relative">
          <img
            src="https://craftohtml.themezaa.com/images/demo-restaurant-the-chefs-07.jpg"
            alt="Chef Banner"
            className="w-full h-auto rounded-md"
          />
          <motion.div
            style={{ y: y2 }}
            className="bg-cusLightBg p-[85px] absolute top-5 left-[90%] rounded-md w-[75%]"
          >
            <p className="text-5xl text-cusBg">HERMAN MILLER</p>
            <p className="text-xl text-customDarkGray mb-10">
              Head Chef and Owner
            </p>
            <div className="bg-cusBg w-full h-[2px]"></div>
            <p className="text-customMediumGray font-schibsted mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              quae, adipisci vero dignissimos iusto corrupti, ad aut, est illum
              officiis ipsam deserunt delectus officia ipsa sapiente expedita
              cum architecto sed?
            </p>
            <img
              src="https://craftohtml.themezaa.com/images/demo-restaurant-the-chefs-08.png"
              alt="Signature"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Professional Chefs Section */}
      <section className="mx-container pb-24">
        <SectionTitle
          subtitle="Professional Chef"
          title="Heart of Kitchen"
          font="yourFontClass"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {chefs.map((chef, index) => (
            <ChefCard
              key={index}
              imageUrl={chef.imageUrl}
              name={chef.name}
              cuisine={chef.cuisine}
            />
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="mx-24 px-4 mb-20">
        <motion.div
          className="mx-10 mb-10 flex flex-col md:flex-row items-end"
          initial={{ opacity: 0, x: 100 }}
          animate={controls1}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="https://craftohtml.themezaa.com/images/demo-restaurant-chefs-09.jpg"
            alt="Quote Image"
            className="w-full md:w-auto"
          />
          <div className="bg-cusBg rounded-tr-[50px] rounded-br-[100px] px-9 py-[65px] flex relative w-full md:w-auto">
            <div className="w-[80%]">
              <span className="font-schibsted text-2xl text-white">
                Once you understand the foundations of cooking whatever kind you
                like, whether it's{" "}
                <span className="underline">
                  French, Italian, or Japanese, you really don't need a cookbook
                  anymore.
                </span>
              </span>
              <p className="text-white mt-8 font-schibsted text-xl">
                Thomas Burgess
              </p>
              <p className="text-white font-schibsted text-lg opacity-50">
                Executive Chef
              </p>
            </div>
            <img
              src="https://craftohtml.themezaa.com/images/blockquote-right-icon.svg"
              alt="Quote Icon"
              className="w-[150px] h-[300px] absolute right-0 bottom-0"
            />
          </div>
        </motion.div>

        {/* Masterchef Tagline */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center font-schibsted px-4 lg:p-0"
          initial={{ opacity: 0, x: -100 }}
          animate={controls2}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="bg-red-700 md:mr-4 text-white font-medium rounded-2xl px-5 py-1 m-2 lg:mr-2 text-center">
            Masterchef
          </div>
          <div className="text-lg inline-block font-normal text-center md:text-nowrap">
            Unique and delicious dishes from the world's{" "}
            <span className="font-semibold underline">best masterchefs.</span>
          </div>
        </motion.div>
      </section>

      <FooterSection />
    </>
  );
};

export default Chefs;
