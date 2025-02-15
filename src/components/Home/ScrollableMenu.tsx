import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import SliderImg from "../Home/SliderImg";

const ScrollableMenu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef(null);

  const sliderData = [
    {
      image:
        "https://craftohtml.themezaa.com/images/demo-restaurant-slider-01.jpg",
      title: "Chicken Breast Burger",
      price: "$12.99",
      text1: "Capsicum",
      text2: "Parmesan",
      text3: "Paneer",
    },
    {
      image:
        "https://craftohtml.themezaa.com/images/demo-restaurant-slider-02.jpg",
      title: "Chicken Breast Burger",
      price: "$13.99",
      text1: "Tomatoes",
      text2: "Parmesan",
      text3: "Basil",
    },
    {
      image:
        "https://craftohtml.themezaa.com/images/demo-restaurant-slider-03.jpg",
      title: "Medium Spicy Chips",
      price: "$7.99",
      text1: "Cheese",
      text2: "Capsicum",
      text3: "Basil",
    },
    {
      image:
        "https://craftohtml.themezaa.com/images/demo-restaurant-slider-04.jpg",
      title: "Appeteaser Platter",
      price: "$15.99",
      text1: "Cucumber",
      text2: "Mushroom",
      text3: "Basil",
    },
    {
      image:
        "https://craftohtml.themezaa.com/images/demo-restaurant-slider-05.jpg",
      title: "Appeteaser Platter",
      price: "$15.99",
      text1: "Mushroom",
      text2: "Parmesan",
      text3: "Paneer",
    },
    {
      image:
        "https://craftohtml.themezaa.com/images/demo-restaurant-slider-01.jpg",
      title: "Chicken Breast Burger",
      price: "$12.99",
      text1: "Capsicum",
      text2: "Parmesan",
      text3: "Paneer",
    },
    {
      image:
        "https://craftohtml.themezaa.com/images/demo-restaurant-slider-02.jpg",
      title: "Chicken Breast Burger",
      price: "$13.99",
      text1: "Tomatoes",
      text2: "Parmesan",
      text3: "Basil",
    },
    {
      image:
        "https://craftohtml.themezaa.com/images/demo-restaurant-slider-03.jpg",
      title: "Medium Spicy Chips",
      price: "$7.99",
      text1: "Cheese",
      text2: "Capsicum",
      text3: "Basil",
    },
    {
      image:
        "https://craftohtml.themezaa.com/images/demo-restaurant-slider-04.jpg",
      title: "Appeteaser Platter",
      price: "$15.99",
      text1: "Cucumber",
      text2: "Mushroom",
      text3: "Basil",
    },
    {
      image:
        "https://craftohtml.themezaa.com/images/demo-restaurant-slider-05.jpg",
      title: "Appeteaser Platter",
      price: "$15.99",
      text1: "Mushroom",
      text2: "Parmesan",
      text3: "Paneer",
    },
  ];

  useEffect(() => {
    const moveNext = async () => {
      if (containerRef.current) {
        const itemWidth = containerRef.current.children[0].offsetWidth;

        await controls.start({
          x: -itemWidth * currentIndex,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        });

        // Pause for 1 second
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // When we reach the end of original array
        if (currentIndex >= sliderData.length) {
          // Instantly jump to the duplicate's starting position
          await controls.set({ x: -itemWidth });
          setCurrentIndex(1);
        } else {
          setCurrentIndex((prev) => prev + 1);
        }
      }
    };

    moveNext();
  }, [currentIndex, controls]);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute hidden lg:flex left-0 z-20 top-0 h-full w-44 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute hidden lg:flex right-0 z-20 top-0 h-full w-44 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      <motion.div
        ref={containerRef}
        className="flex flex-shrink-0 "
        animate={controls}
      >
        {[...sliderData, ...sliderData].map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-max md:w-1/3 lg:w-1/4 xl:w-1/4 flex-shrink-0 relative lg:right-52"
          >
            <SliderImg {...item} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollableMenu;
