import SectionTitle from "../SectionTitle";
import TabContent from "./TabContent";
import AnimatedSection from "../AnimatedSection";

export default function PopularMenuSection() {
  return (
    <section
      className="relative lg:py-[90px] py-12 bg-center"
      style={{
        backgroundImage:
          "url('https://craftohtml.themezaa.com/images/demo-restaurant-home-05.jpg')",
      }}
    >
      <div className="lg:mx-container sm:mx-12 md:mx-32">
        <SectionTitle
          title="Choose Delicious"
          subtitle="Popular Menu"
          font="custom-font-class"
        />
        <TabContent />
        <AnimatedSection className="flex md:flex-row flex-col items-center justify-center font-schibsted px-4 lg:p-0">
          <div className="bg-red-700  text-white font-medium rounded-2xl px-5 py-1 m-2 lg:mr-2 text-center">
            Masterchef{"  "}
          </div>
          <div className="text-lg inline-block font-normal text-center md:text-nowrap">
            Unique and delicious dishes from the worlds{" "}
            <span className="font-semibold underline">best masterchefs.</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
