import React from "react";

import { GoStarFill } from "react-icons/go";

const Stars = (Props) => {
  return (
    <div className="flex leading-[2.25rem] h-[36px] justify-start items-center">
      {Array.from({ length: 5 }).map((_, index) => (
        <GoStarFill
          key={index}
          size={20}
          className={`text-${Props.color} fill-${Props.color}`}
        />
      ))}
    </div>
  );
};

export default Stars;
