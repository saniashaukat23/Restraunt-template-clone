import React, { useEffect, useRef, useState } from "react";
import Stars from "../Stars";

export default function SpecialMenuItem({
  image,
  rating,
  title,
  originalPrice,
  discountedPrice,
}) {
  const imageRef = useRef(null);

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const rotateValue = (window.scrollY * 0.05) % 45;
      setRotation(rotateValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="md:min-w-[320px] flex items-center flex-col mb-10 lg:mb-0 min-w-[240px] ">
      <img
        ref={imageRef}
        src={image}
        alt={title}
        style={{ transform: `rotate(${rotation}deg)` }}
        className="transition-transform duration-700 ease-out "
      />
      <div className="flex justify-center ">
        <div className="bg-[#ECBA23] flex w-max rounded-l-md px-2.5 mb-5">
          <Stars color="white" />
        </div>
        <div className="bg-customDarkGray rounded-r-md h-9 flex items-center justify-center">
          <p className="text-lg px-2.5 text-white">{rating}</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-customDarkGray text-2xl">{title}</p>
        <div>
          <span className="mr-2.5 text-2xl text-customRed line-through">
            ${originalPrice}
          </span>
          <span className="text-2xl text-cusDarkGray">${discountedPrice}</span>
        </div>
      </div>
    </div>
  );
}
