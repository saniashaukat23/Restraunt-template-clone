import React from "react";
import SectionTitle from "../SectionTitle";
import AwardCard from "./AwardCard";

const AwardsSection = () => {
  const awards = [
    {
      imageUrl:
        "https://craftohtml.themezaa.com/images/demo-restaurant-about-award-01.jpg",
      awardName: "Restraunt Choice",
      year: "2017",
    },
    {
      imageUrl:
        "https://craftohtml.themezaa.com/images/demo-restaurant-about-award-02.jpg",
      awardName: "Luxury Restraunt ",
      year: "2019",
    },
    {
      imageUrl:
        "https://craftohtml.themezaa.com/images/demo-restaurant-about-award-03.jpg",
      awardName: "Britist Best Kebab",
      year: "2020",
    },
    {
      imageUrl:
        "https://craftohtml.themezaa.com/images/demo-restaurant-about-award-04.jpg",
      awardName: "Good Fod Taste Award",
      year: "2021",
    },
  ];

  return (
    <section className="py-24 mx-container md:mx-20">
      <SectionTitle subtitle={"Awards and honours"} title={"Achievements"} />

      <div className="grid lg:grid-cols-4 sm:grid-cols-2">
        {awards.map((award, index) => (
          <AwardCard
            key={index}
            index={index}
            imageUrl={award.imageUrl}
            awardName={award.awardName}
            year={award.year}
          />
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
