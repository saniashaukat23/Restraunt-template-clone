import React from "react";

interface AboutImgsProps {
  img: string;
  title: string;
  text: string;
}

const AboutImgs: React.FC<AboutImgsProps> = ({ img, title, text }) => {
  return (
    <div className="flex flex-col px-4 group">
      <div className="overflow-hidden rounded-md">
        <img
          src={img}
          alt={title} // Added a meaningful alt text
          className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
        />
      </div>
      <div className="p-9 flex justify-center items-center flex-col">
        <p className="text-2xl text-customDarkGray">{title}</p>
        <p className="text-md text-center text-customDarkGray opacity-70 font-schibsted">
          {text}
        </p>
      </div>
    </div>
  );
};

export default AboutImgs;
