const HorizontalGallery = ({ images }) => {
  return (
    <section className="py-24 md:py-16 relative bg-cusLightBg -z-20">
      <div className="h-[2px] w-[200%] bg-cusBg absolute top-[50%] -z-10"></div>

      <div className="mx-container">
        <div className="flex scroll-snap snap-x snap-mandatory gap-4 items-center">
          {images.map((image, index) => (
            <div key={index} className="snap-start flex-shrink-0 w-[300px] ">
              <img
                className="w-full h-auto rounded-md"
                src={image}
                alt={`Gallery Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalGallery;
