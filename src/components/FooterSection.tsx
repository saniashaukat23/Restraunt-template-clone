import React from "react";

import { BiChat, BiLocationPlus, BiEnvelope } from "react-icons/bi";
import { FiPhoneIncoming } from "react-icons/fi";
import { Facebook, Instagram, Dribbble, Twitter } from "react-feather";

const FooterSection = () => {
  const footerItems = [
    {
      icon: <BiChat size={38} className="text-customDarkGray mb-4" />,
      title: "About restaurant",
      description: "Enjoy a wonderful cafe dining experience",
    },
    {
      icon: <FiPhoneIncoming size={38} className="text-customDarkGray mb-3" />,
      title: "Let's Talk",
      description: (
        <>
          Phone: 1-800-222-000
          <br />
          Fax: 1-800-222-002
        </>
      ),
    },
    {
      icon: <BiEnvelope size={38} className="text-customDarkGray mb-4" />,
      title: "Book a table",
      description: (
        <>
          info@yourdomain.com
          <br />
          hr@yourdomain.com
        </>
      ),
    },
    {
      icon: <BiLocationPlus size={38} className="text-customDarkGray mb-4" />,
      title: "Contact us",
      description: "Lorem ipsum consectetur adipiscing onsectetur.",
    },
  ];

  return (
    <footer className="relative lg:pt-24 pt-12 bg-bottom bg-VeryLightGray lg:bg-[url('https://craftohtml.themezaa.com/images/demo-restaurant-home-footer-bg.jpg')] lg:bg-cover">
      <div className="lg:px-[15px] lg:mx-container sm:mx-12  grid sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-1 lg:mt-36 lg:mb-11 grid-cols-1 gap-10">
        {footerItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center px-[15px]"
          >
            {item.icon}
            <div className="flex flex-col justify-center items-center mx-12 lg:mx-0 sm:w-[90%]">
              <span className="font-schibsted uppercase text-[15px] text-customDarkGray font-bold leading-7 text-center">
                {item.title}
              </span>
              <p className="text-[17px] font-schibsted text-customMediumGray text-center lg:w-[100%]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-gray-400  opacity-30"></div>
      <div className="lg:py-6 py-6 flex lg:flex-row flex-col justify-between items-center lg:mx-28 ">
        <div className="px-4 flex lg:flex-row flex-col justify-center items-center mb-5 lg:mb-0">
          <img
            src="https://craftohtml.themezaa.com/images/demo-restaurant-logo-black.png"
            alt=""
          />
        </div>
        <div className="flex hidden mb-5 lg:mb-0">
          <p className="text-base font-schibsted text-customMediumGray">
            © Copyright 2024{" "}
            <a
              href="https://craftohtml.themezaa.com/index.html"
              className="font-medium border-b-2 border-spacing-1 text-black border-black"
            >
              Crafto
            </a>
          </p>
        </div>
        <div className="px-4 hidden flex lg:flex-row flex-col justify-center items-center">
          <img
            src="https://craftohtml.themezaa.com/images/demo-restaurant-logo-black.png"
            alt=""
          />
        </div>

        <div className="flex items-end flex-row justify-center gap-4  mb-5 lg:mb-0 text-customDarkGray">
          <span>
            <Facebook />
          </span>
          <span>
            <Dribbble />
          </span>
          <span>
            <Twitter />
          </span>
          <span>
            <Instagram />
          </span>
        </div>
        <div className="flex mb-5 lg:mb-0">
          <p className="text-base font-schibsted text-customMediumGray">
            © Copyright 2024{" "}
            <a
              href="https://craftohtml.themezaa.com/index.html"
              className="font-medium border-b-2 border-spacing-1 text-black border-black"
            >
              Crafto
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
