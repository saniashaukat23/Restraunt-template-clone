import React from "react";

const AwardCard = ({ imageUrl, awardName, year, index }) => {
  return (
    <div
      className={`p-11 flex flex-col justify-center items-center border border-customMediumGray border-opacity-30 ${
        index < 3 ? "lg:border-r-0 " : ""
      } ${index < 2 ? "border-b-0 lg:border-b" : ""} ${
        index % 2 === 0 ? "sm:border-r-0 border-r" : ""
      }  hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] `}
    >
      <img src={imageUrl} alt="" className="pb-6" />
      <span className="text-lg font-schibsted text-center w-max">
        {awardName} <br /> award-<b>{year}</b>
      </span>
    </div>
  );
};

export default AwardCard;
