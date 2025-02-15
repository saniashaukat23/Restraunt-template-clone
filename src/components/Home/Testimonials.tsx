import { useState } from "react";
import { motion } from "framer-motion";
import ImageSwiper from "./ImageSwiper";

const testimonials = [
  {
    author: "Herman Miller",
    quote:
      "Food for us comes from our relatives whether they have wings or fins or roots that is how we consider food has a culture It has history it has a story it has relationships.",
    image: "https://craftohtml.themezaa.com/images/avtar-33.jpg",
  },
  {
    author: " Matthew Taylor",
    quote:
      "It was a lovely place with great ambience. Loved the service of the staff. The dishes are priced very high as compared to the quality. Thank you so much to all staff.",
    image: "https://craftohtml.themezaa.com/images/avtar-34.jpg",
  },
  {
    author: "Leonel Mooney",
    quote:
      "Good communication and the food was great the facilities were good. Love the desserts and there way of presenting. We came here for a family dinner and this place won my heart.",
    image: "https://craftohtml.themezaa.com/images/avtar-35.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="lg:col-span-6 lg:max-w-[40%] sm:m-12 mx-10  md:mx-20   flex flex-col justify-center items-center text-center text-customGray">
      <motion.div
        key={currentIndex}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <img
          className="mb-10 rounded-full "
          src="https://craftohtml.themezaa.com/images/demo-restaurant-home-quotes-icon.jpg"
        />
        <p className="lg:leading-[2.625rem] lg:text-[2.375rem] text-3xl tracking-tight mb-4">
          {testimonials[currentIndex].quote}
        </p>
        <span className="font-schibsted font-medium text-xl text-cusBg mb-6">
          {testimonials[currentIndex].author}
        </span>
      </motion.div>
      <ImageSwiper
        images={testimonials.map((t) => t.image)}
        onImageClick={setCurrentIndex}
        currentIndex={currentIndex}
      />
    </div>
  );
}
