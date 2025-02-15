import { useState, useEffect } from "react";
import HeroSection from "../HeroSection";
import ContentText from "../ContentText";
import PopularMenuSection from "./PopularMenuSection";
import FooterSection from "../FooterSection";
import SectionTitle from "../SectionTitle";

import SpecialMenuItem from "./SpecialMenuItem";

export default function MenuPage() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const rotateValue = (window.scrollY * 0.07) % 90;
      setRotation(rotateValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section>
        <HeroSection
          heading={"OUR MENU"}
          subheading={"- REMARKABLE RECIPES -"}
        />
      </section>
      <section>
        <div className="sm:mx-container mx-10 pb-24">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-7/12 sm:w-full">
              <img
                src="https://craftohtml.themezaa.com/images/demo-restaurant-menu-01.png"
                alt=""
                style={{ transform: `rotate(${rotation}deg)` }}
                className="transition-transform duration-700 ease-out"
              />
            </div>

            <div className="lg:w-5/12 w-full mt-10 lg:mt-0">
              <ContentText
                title={"Best Quality Food"}
                title2={"The greatest table luxury restaurant."}
                text={
                  "Lorem ipsum dolor sit amet consectetur elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation."
                }
                btnText={"About Restraunt"}
              />
            </div>
          </div>
        </div>
      </section>
      <PopularMenuSection />
      <section className="lg:py-24 py-12">
        <div className="mx-12">
          <SectionTitle
            title={"Special Proposals"}
            subtitle={"Master chef's special"}
          />
          <div
            className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1
          lg:[&>div:not(:last-child)]:border-r [&>div:not(:last-child)]:border-cusborder
          md:[&>div:first-child]:border-r [&>div:first-child]:border-cusborder my-10 lg:my-0 "
          >
            <SpecialMenuItem
              image="https://craftohtml.themezaa.com/images/demo-restaurant-menu-02.jpg"
              rating="4.8"
              title="Grilled steak marinades"
              originalPrice="25.00"
              discountedPrice="19.00"
            />
            <SpecialMenuItem
              image="https://craftohtml.themezaa.com/images/demo-restaurant-menu-03.jpg"
              rating="4.8"
              title="Beef Masala Grill"
              originalPrice="24.00"
              discountedPrice="18.00"
            />
            <SpecialMenuItem
              image="https://craftohtml.themezaa.com/images/demo-restaurant-menu-04.jpg"
              rating="4.8"
              title="Slow Cooker Potpourri"
              originalPrice="22.00"
              discountedPrice="20.00"
            />
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
