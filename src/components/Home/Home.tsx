import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Box, Award, ShoppingBag } from "react-feather";
import Banner from "./Banner";
import TextCarousel from "../TextCarousel";
import ScrollableMenu from "./ScrollableMenu";
import BlogImages from "../Blog/BlogImages";
import FooterSection from "../FooterSection";
import ContentText from "../ContentText";
import Testimonials from "./Testimonials";
import RatingBar from "../About/RatingBar";
import SectionTitle from "../SectionTitle";
import PopularMenuSection from "../Menu/PopularMenuSection";

const IMAGE_URLS = {
  bannerBg:
    "https://craftohtml.themezaa.com/images/demo-restaurant-home-banner-bg.jpg",
  mainDish:
    "https://craftohtml.themezaa.com/images/demo-restaurant-home-04.png",
  decorLeft:
    "https://craftohtml.themezaa.com/images/demo-restaurant-home-02.jpg",
  decorRight:
    "https://craftohtml.themezaa.com/images/demo-restaurant-home-03.jpg",
  blog1: "https://craftohtml.themezaa.com/images/demo-restaurant-blog-01.jpg",
  blog2: "https://craftohtml.themezaa.com/images/demo-restaurant-blog-02.jpg",
  blog3: "https://craftohtml.themezaa.com/images/demo-restaurant-blog-03.jpg",
};

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
};

const AnimatedSection: FC<AnimatedSectionProps> = ({
  children,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
export default function Home() {
  const containerRef = useRef(null);
  const mainDishRef = useRef(null);
  const isMainDishInView = useInView(mainDishRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end start", "start end"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const translateY = useTransform(scrollYProgress, [0, 1], ["20vh", "80vh"]);

  return (
    <>
      {/* Hero Section */}
      <section className="overflow-hidden relative top-10 lg:top-0">
        <div
          className="relative w-full h-screen flex justify-center items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGE_URLS.bannerBg})` }}
        >
          <div className="absolute inset-0 bg-[#383632] opacity-20"></div>
          <Banner />
        </div>
      </section>

      {/* About Section */}
      <section className="relative lg:py-[90px] md:py-[75px] pt-24 sm:mx-12 lg:mx-0">
        <div className="absolute w-full -z-10 text-customLightGray text-[10rem] sm:text-[12rem] md:text-[14rem] font-medium text-center lg:-top-[18%] opacity-20 uppercase lg:text-[350px]">
          Experience
        </div>

        <div
          className="container px-[15px] mx-auto space-y-6 relative lg:flex"
          ref={containerRef}
        >
          <motion.img
            style={{ rotate, y: translateY }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute hidden lg:block -left-24 w-1/5 -top-36 h-auto -z-10"
            src={IMAGE_URLS.decorLeft}
            alt="Decorative"
            loading="lazy"
          />

          {/* Main Dish Image */}
          <div className="mt-[30px] lg:px-[15px] md:w-[90%] lg:w-[54%] flex justify-center">
            <motion.img
              ref={mainDishRef}
              initial={{ rotateZ: -20, opacity: 0 }}
              animate={isMainDishInView ? { rotateZ: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full h-auto"
              src={IMAGE_URLS.mainDish}
              alt="Main Dish"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="lg:flex-1 lg:pl-10">
            <motion.img
              style={{ rotate, y: translateY }}
              className="absolute hidden lg:block -right-20 -top-[60%] w-1/6 h-auto -z-20"
              src={IMAGE_URLS.decorRight}
              alt="Decorative"
              loading="lazy"
            />
            <AnimatedSection>
              <ContentText
                title="since 1988"
                title2="Wonderful dining experience & food."
                text="Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation."
                btnText="About Restaurant"
              />
            </AnimatedSection>
          </div>
        </div>

        {/* Badges */}
        <AnimatedSection>
          <div className="lg:mx-container grid md:grid-cols-2 lg:grid-cols-3 gap-5 self-center">
            {[
              { text1: "Fast Delivery", text2: "Within 30 minutes", icon: Box },
              {
                text1: "Absolute Dining",
                text2: "Best Buffet Restaurant",
                icon: Award,
              },
              {
                text1: "Pickup Delivery",
                text2: "Grab Your Food Order",
                icon: ShoppingBag,
              },
            ].map(({ text1, text2, icon: Icon }, index) => (
              <div
                key={index}
                className="bg-white p-4 flex items-center md:justify-center px-[15px]"
              >
                <div
                  className="icon w-[100px] h-[100px] flex items-center justify-center rounded-full shadow-custom-blue mr-[25px] bg-white"
                  aria-hidden="true"
                >
                  <Icon className="w-[34px] h-[34px] font-normal italic text-customDarkGray" />
                </div>
                <div>
                  <p className="text-customDarkGray text-[26px] leading-[38px]">
                    {text1}
                  </p>
                  <p className="lg:text-[18px] leading-[22px] font-schibsted opacity-50 font-medium md:text-base">
                    {text2}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <PopularMenuSection />

      {/* Popular Dishes */}
      <section className="lg:py-24 py-12">
        <AnimatedSection>
          <SectionTitle
            subtitle="Special Choice"
            title="POPULAR DISHES"
            font="font-bold"
          />
        </AnimatedSection>
        <AnimatedSection>
          <ScrollableMenu />
        </AnimatedSection>
      </section>
      <section className="lg:py-24  py-12 relative lg:mt-12 bg-cusLightBg ">
        <div className="overflow-hidden relative lg:-top-44 ">
          <AnimatedSection>
            <TextCarousel />
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="flex items-start justify-center relative lg:-top-32 px-4">
            <Testimonials />
          </div>
        </AnimatedSection>
        <RatingBar />
      </section>
      {/* Blog Section */}
      <section className="lg:py-24 py-12 px-4 mx-12 lg:mx-container">
        <AnimatedSection>
          <SectionTitle
            subtitle="From Our Blogs"
            title="Recent Articles"
            font="font-bold"
          />
        </AnimatedSection>
        <AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <BlogImages
              img={IMAGE_URLS.blog1}
              text="Never Eat more than you can lift."
              buttonText="Read More"
            />
            <BlogImages
              img={IMAGE_URLS.blog2}
              text="Life is uncertain. Eat dessert first."
              buttonText="Discover"
            />
            <BlogImages
              img={IMAGE_URLS.blog3}
              text="Food simply isn't important to me."
              buttonText="Explore"
            />
          </div>
        </AnimatedSection>
      </section>

      <FooterSection />
    </>
  );
}
