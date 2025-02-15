import HeroSection from "../HeroSection";
import FooterSection from "../FooterSection";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
const Contact = () => {
  return (
    <>
      <HeroSection heading={"Contact Us"} subheading={"- Delicious Food -"} />
      <section className="mx-container relative">
        <div style={{ width: "100%", maxWidth: "950px" }}>
          <iframe
            title="Google Maps - Melbourne, FL"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112604.50043848241!2d-80.6642105!3d28.11936305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de0e2c4771994d%3A0x8bcdb254a90cd2a8!2sMelbourne%2C%20FL%2C%20USA!5e0!3m2!1sen!2s!4v1738504922680!5m2!1sen!2s"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <img
          src="https://craftohtml.themezaa.com/images/demo-restaurant-contact-01.jpg"
          alt=""
          className="absolute top-0 left-[80%] -z-10"
        />
        <div className="flex">
          <p className="w-1/2 text-[8.75rem] leading-[150px] text-customMediumGray opacity-10 font-bold font-schibsted px-10">
            Write Here
          </p>
          <form className="w-[40%] absolute top-1/4 right-20 p-12 bg-cusLightBg font-schibsted text-customLightGray text-lg flex flex-col">
            <p className="text-6xl text-customDarkGray mb-4 font-bebas">
              HOW CAN WE HELP YOUR Food?
            </p>
            <input
              type="text"
              id="UserName"
              placeholder="Your Name*"
              required
              className=" p-3 bg-cusLightBg border-b border-gray-300  outline-none   mt-4"
            />
            <input
              type="email"
              id="Usermail"
              placeholder="Your Email*"
              required
              className=" p-3 bg-cusLightBg border-b border-gray-300 outline-none mt-4"
            />
            <textarea
              id="UserMessage"
              placeholder="Your Message"
              className=" p-3 bg-cusLightBg border-b border-gray-300  outline-none mt-4"
            ></textarea>
            <motion.a
              href="demo-restaurant-about.html"
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative font-bebas mt-10 bg-customDarkGray lg:w-1/3 w-[47%] sm:w-[32%] flex flex-row items-center justify-center text-white lg:px-4 lg:py-7 px-5 py-7 text-lg rounded-[4px]  overflow-hidden "
            >
              <motion.span
                className="btn-double-text absolute top-4 "
                variants={{
                  rest: {
                    opacity: 1,
                    y: 0,
                  },
                  hover: {
                    opacity: 0,
                    y: "-200%",
                  },
                }}
                transition={{
                  opacity: { duration: 0.6 },
                }}
                data-text="About restaurant"
              >
                Send a Message
              </motion.span>
              <motion.span
                className="btn-double-text font-bebas absolute top-4"
                variants={{
                  rest: {
                    opacity: 0,
                    y: "200%",
                  },
                  hover: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  opacity: { duration: 0.6 },
                }}
              >
                Send a Message
              </motion.span>
            </motion.a>
          </form>
        </div>
      </section>
      <section className="mx-container py-20 flex">
        <SectionTitle
          title={"Reserve a Table?  Let's talk us."}
          subtitle={"Need a private space?"}
          font="yourFontClass"
        />
        <div className="grid grid-cols-3 gap-20 self-start mr-16 mt-10">
          {/* Write us Section */}
          <div className="flex flex-col gap-2">
            <p className="text-customDarkGray text-3xl">Write us</p>
            <span className="text-base text-customLightGray font-schibsted">
              info@yourdomain.com
            </span>
            <span className="text-base text-customLightGray font-schibsted">
              hr@yourdomain.com
            </span>
          </div>

          {/* Follow us Section */}
          <div className="flex flex-col gap-2">
            <p className="text-customDarkGray text-3xl">Follow us</p>

            <span className="text-base text-customLightGray font-schibsted">
              Crafto in Facebook
            </span>

            <span className="text-base text-customLightGray font-schibsted">
              Crafto in Twitter
            </span>
          </div>

          {/* Call us Section */}
          <div className="flex flex-col gap-2">
            <p className="text-customDarkGray text-3xl">Call us</p>
            <span className="text-base text-customLightGray font-schibsted">
              +1 234 567 8910
            </span>
            <span className="text-base text-customLightGray font-schibsted">
              +1 234 567 8910
            </span>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default Contact;
