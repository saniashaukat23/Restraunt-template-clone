import React from "react";

type IconsProps = {
  icon?: React.ElementType;
  category: string;
  selected: boolean;
  isGalleryPage?: boolean;
};

const Icons: React.FC<IconsProps> = ({
  icon: Icon,
  category,
  selected,
  isGalleryPage,
}) => {
  return (
    <div>
      <a
        href="#"
        className={`group flex flex-col items-center gap-2 cursor-pointer text-customMediumGray m-0 normal-case pb-2 transition-all duration-300 mx-[40px] px-[17px] ${
          selected ? "text-black" : " hover:text-black hover:scale-105"
        }`}
      >
        {!isGalleryPage && Icon ? (
          <Icon
            className={`text-[45px] stroke-[0.7] transition-colors duration-300 ${
              selected ? "text-cusBg" : "group-hover:text-cusBg"
            }`}
          />
        ) : !isGalleryPage ? (
          "No Icon"
        ) : null}
        <p
          className={`text-[18px] font-schibsted leading-5 text-center border-b-2 pb-1 ${
            selected
              ? "border-black"
              : "border-transparent group-hover:border-black"
          }`}
        >
          {category}
        </p>
      </a>
    </div>
  );
};

export default Icons;
