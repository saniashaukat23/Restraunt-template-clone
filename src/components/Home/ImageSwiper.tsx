import React from "react";
import { motion } from "framer-motion";

export default function ImageSwiper({ images, onImageClick, currentIndex }) {
  return (
    <div className="flex gap-4">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`Testimonial ${index + 1}`}
          className={`w-24 h-24 rounded-full cursor-pointer ${
            currentIndex === index ? "" : "opacity-50"
          }`}
          onClick={() => onImageClick(index)}
          animate={{
            scale: currentIndex === index ? 1.2 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          whileHover={{ scale: currentIndex === index ? 1.2 : 1.1 }}
        />
      ))}
    </div>
  );
}
