import React, { useState, useRef, ReactNode } from "react";
import MenuLi from "./MenuLi";
import Icons from "./Icons";
import { motion, useInView } from "framer-motion";
import { TbBowlChopsticks } from "react-icons/tb";
import { LuDessert, LuCookie } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { PiBeerSteinThin } from "react-icons/pi";

// Type for menu items
type MenuItem = {
  img: string;
  Price: string;
  Name: string;
};

// Type for AnimatedSection props
type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
};

// AnimatedSection Component with TypeScript
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, rotateX: 80 }}
      animate={{ opacity: 1, rotateX: isInView ? 0 : 90 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

const TabContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Tabs Content Data
  const tabsContent: MenuItem[][] = [
    [
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-01.jpg",
        Price: "$12.00",
        Name: "Boiled Organic Egg",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-02.jpg",
        Price: "$10.00",
        Name: "Chicken breast burger",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-03.jpg",
        Price: "$8.00",
        Name: "Medium spicy chips",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-04.jpg",
        Price: "$11.00",
        Name: "Spicy Chicken",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-05.jpg",
        Price: "$8.00",
        Name: "Vegetarian Wrap",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-06.jpg",
        Price: "$8.00",
        Name: "Vegetarian Wrap",
      },
    ],
    [
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-02.jpg",
        Price: "$10.00",
        Name: "Chicken breast burger",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-04.jpg",
        Price: "$11.00",
        Name: "Spicy Chicken",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-01.jpg",
        Price: "$12.00",
        Name: "Boiled Organic Egg",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-03.jpg",
        Price: "$8.00",
        Name: "Medium spicy chips",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-05.jpg",
        Price: "$8.00",
        Name: "Vegetarian Wrap",
      },
    ],
    [
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-05.jpg",
        Price: "$8.00",
        Name: "Vegetarian Wrap",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-04.jpg",
        Price: "$11.00",
        Name: "Spicy Chicken",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-03.jpg",
        Price: "$8.00",
        Name: "Medium spicy chips",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-02.jpg",
        Price: "$10.00",
        Name: "Chicken breast burger",
      },
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-01.jpg",
        Price: "$12.00",
        Name: "Boiled Organic Egg",
      },
    ],
    [
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-06.jpg",
        Price: "$5.00",
        Name: "Chocolate Cake",
      },
    ],
    [
      {
        img: "https://craftohtml.themezaa.com/images/demo-restaurant-tab-07.jpg",
        Price: "$3.00",
        Name: "Fresh Juice",
      },
    ],
  ];

  return (
    <div className="w-100% h-auto mb-6">
      <div className="flex justify-center items-center">
        <AnimatedSection className="grid grid-cols-1 mb-[20px] md:grid-cols-5 w-[80%] mx-auto">
          {[
            { category: "Starters", icon: TbBowlChopsticks },
            { category: "NonVeg", icon: GiChickenOven },
            { category: "Vegetarian", icon: LuCookie },
            { category: "Dessert", icon: LuDessert },
            { category: "Drinks", icon: PiBeerSteinThin },
          ].map((tab, index) => (
            <button
              key={index}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(index);
              }}
              className="flex flex-col items-center justify-center lg:p-4 py-2 hover:text-primary focus:text-primary"
              aria-label={tab.category}
              title={tab.category}
            >
              <Icons
                category={tab.category}
                icon={tab.icon}
                selected={activeTab === index}
                isGalleryPage={false}
              />
            </button>
          ))}
        </AnimatedSection>
      </div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:grid-cols-1 p-4"
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          layout: { duration: 0.3 },
          opacity: { duration: 0.3 },
        }}
      >
        {tabsContent[activeTab]?.map((item, index) => (
          <motion.div
            key={index}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MenuLi img={item.img} Price={item.Price} Name={item.Name} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TabContent;
