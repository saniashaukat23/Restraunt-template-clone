import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

interface ChefCardProps {
  imageUrl: string;
  name: string;
  cuisine: string;
}

const ChefCard: React.FC<ChefCardProps> = ({ imageUrl, name, cuisine }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="relative flex flex-col justify-center items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className={`w-full transition-all duration-500 ${
            isHovered ? "filter grayscale brightness-125" : ""
          }`}
        />
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
        )}

        {/* Social Icons */}
        <div className="absolute bottom-4 left-[35%] flex space-x-4 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
          <FaFacebookF
            aria-label="Facebook"
            role="button"
            className="text-black text-xl cursor-pointer"
            onClick={() =>
              window.open("https://facebook.com/chef-profile", "_blank")
            }
          />
          <FaTwitter
            aria-label="Twitter"
            role="button"
            className="text-black text-xl cursor-pointer"
            onClick={() =>
              window.open("https://twitter.com/chef-profile", "_blank")
            }
          />
          <FaInstagram
            aria-label="Instagram"
            role="button"
            className="text-black text-xl cursor-pointer"
            onClick={() =>
              window.open("https://instagram.com/chef-profile", "_blank")
            }
          />
        </div>
      </div>

      {/* Chef Name & Cuisine */}
      <p className="text-2xl text-customDarkGray mt-4">{name}</p>
      <p className="text-customLightGray text-md font-schibsted">{cuisine}</p>
    </div>
  );
};

export default ChefCard;
