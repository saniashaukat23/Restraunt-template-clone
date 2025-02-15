import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoWhite from "../assets/demo-restaurant-logo-white.webp";
import LogoBlack from "../assets/demo-restaurant-logo-black.webp";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "react-feather";
import { Calendar } from "react-feather";
import { Menu } from "react-feather";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === "/";
  const commonStyles = {
    logo: LogoBlack,
    text: "text-customDarkGray",
    button:
      "border-customDarkGray bg-customDarkGray text-white group-hover:bg-white group-hover:text-customDarkGray",
    bg: isScrolled ? "bg-white" : "bg-transparent",
  };

  const homePageStyles = {
    logo: isScrolled ? LogoBlack : LogoWhite,
    bg: isScrolled ? "bg-white" : "bg-transparent",
    text: isScrolled ? "text-customDarkGray" : "text-white",
    button: isScrolled
      ? "border-customDarkGray bg-customDarkGray text-white hover:bg-white group-hover:text-customDarkGray"
      : "bg-white text-customDarkGray hover:bg-transparent group-hover:text-customDarkGray",
    calendarIcon: isScrolled
      ? "text-white group-hover:text-customDarkGray"
      : "text-customDarkGray group-hover:text-white",
    motionContainer: isScrolled
      ? "text-white group-hover:text-customDarkGray"
      : "text-customDarkGray group-hover:text-white",
  };

  const currentStyle = isHomePage ? homePageStyles : commonStyles;

  return (
    <nav
      className={`navbar fixed top-0 left-0 w-full z-20 lg:px-16 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      } ${currentStyle.bg}`}
    >
      <div className="container-fluid flex items-center justify-between px-4 lg:px-0">
        <div
          className={` transition-all duration-300 flex lg:justify-start items-center w-[80%] ${
            isScrolled ? "py-4" : "py-7"
          }`}
        >
          <Link to="/" className="navbar-brand">
            <img src={currentStyle.logo} alt="Logo" className="max-w-full " />
          </Link>
        </div>

        <div className="hidden lg:flex justify-center items-center">
          <div className="flex space-x-6">
            <ul className="navbar-nav flex space-x-6 uppercase text-sm tracking-wide">
              {[
                "Home",
                "About",
                "Menu",
                "Story",
                "Gallery",
                "Chefs",
                "Blog",
                "Contact",
              ].map((name, index) => (
                <li key={index} className="nav-item m-0">
                  <Link
                    to={`/${
                      name.toLowerCase() === "home" ? "" : name.toLowerCase()
                    }`}
                    className={`nav-link hover:text-gray-500 transition text-[20px] font-medium pr-[20px] py-[10px] duration-200 ${
                      isScrolled ? currentStyle.text : currentStyle.text
                    } ${
                      location.pathname ===
                      (name.toLowerCase() === "home"
                        ? "/"
                        : `/${name.toLowerCase()}`)
                        ? "text-gray-500"
                        : ""
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="header-button px-[15px] flex justify-end items-center sm:px-0 sm:w-2/3 gap-10 ">
          <Link
            to="/contact"
            className={`group btn border rounded-full items-center justify-center px-6 py-2 transition-all text-sm uppercase relative overflow-hidden hidden sm:flex ${currentStyle.button} sm:${commonStyles.button}`}
          >
            <Calendar
              className={`mr-2 ${
                isHomePage ? homePageStyles.calendarIcon : ""
              }`}
              size={15}
            />
            <motion.div
              className={`relative flex items-center justify-center h-6 ${
                isHomePage ? homePageStyles.motionContainer : ""
              }`}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.span
                variants={{
                  rest: { opacity: 1, y: 0 },
                  hover: { opacity: 0, y: "-200%" },
                }}
                transition={{ opacity: { duration: 0.7 }, ease: "easeInOut" }}
              >
                Book a table
              </motion.span>
              <motion.span
                className="absolute "
                variants={{
                  rest: { opacity: 0, y: "200%" },
                  hover: { opacity: 1, y: 0 },
                }}
                transition={{ opacity: { duration: 0.7 }, ease: "easeInOut" }}
              >
                Book a table
              </motion.span>
            </motion.div>
          </Link>

          <button
            onClick={toggleNavbar}
            className={`lg:hidden ${currentStyle.text}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {isOpen && (
            <AnimatePresence>
              <motion.div
                initial={{
                  x: "100%",
                }}
                animate={{
                  x: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                exit={{
                  x: "100%",
                }}
                className={`fixed top-0 right-0 h-full bg-customDarkGray z-20 w-[90vw] sm:w-[70vw] md:w-[70vw] lg:hidden`}
              >
                <div className="p-4 flex justify-end relative">
                  <button
                    onClick={toggleNavbar}
                    className="text-white absolute left-10 top-10"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="px-24 py-24 flex flex-shrink flex-col overflow-hidden">
                  <ul className="overflow-y-auto max-h-[calc(100vh-150px)]">
                    {[
                      "Home",
                      "About",
                      "Menu",
                      "Story",
                      "Gallery",
                      "Chefs",
                      "Blog",
                      "Contact",
                    ].map((name, index) => (
                      <li
                        key={index}
                        className="nav-item py-4 border-b-[1px] border-customMediumGray border-opacity-70"
                      >
                        <Link
                          to={`/${
                            name.toLowerCase() === "home"
                              ? ""
                              : name.toLowerCase()
                          }`}
                          className={`text-white hover:text-gray-300 ${
                            location.pathname ===
                            (name.toLowerCase() === "home"
                              ? "/"
                              : `/${name.toLowerCase()}`)
                              ? "text-gray-300"
                              : ""
                          }`}
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </nav>
  );
}
