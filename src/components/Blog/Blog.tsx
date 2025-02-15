import HeroSection from "../HeroSection";
import BlogImages from "./BlogImages";
import FooterSection from "../FooterSection";

const Blog = () => {
  const blogData = [
    {
      img: "https://craftohtml.themezaa.com/images/demo-restaurant-blog-01.jpg",
      text: "Never Eat more than you can life.",
      buttonText: "Restaurant",
    },
    {
      img: "https://craftohtml.themezaa.com/images/demo-restaurant-blog-02.jpg",
      text: "Life is uncertain Eat dessert first.",
      buttonText: "Dessert",
    },
    {
      img: "https://craftohtml.themezaa.com/images/demo-restaurant-blog-03.jpg",
      text: "Food simply isn't important to me.",
      buttonText: "Food",
    },
    {
      img: "https://craftohtml.themezaa.com/images/demo-restaurant-blog-04.jpg",
      text: "Excite your taste buds now.",
      buttonText: "Taste",
    },
    {
      img: "https://craftohtml.themezaa.com/images/demo-restaurant-blog-05.jpg",
      text: "Stories from the kitchen.",
      buttonText: "Kitchen",
    },
    {
      img: "https://craftohtml.themezaa.com/images/demo-restaurant-blog-06.jpg",
      text: "Art of food presentation.",
      buttonText: "Art",
    },
    {
      img: "https://craftohtml.themezaa.com/images/demo-restaurant-blog-07.jpg",
      text: "Experience magic dine here.",
      buttonText: "Magic",
    },
    {
      img: "https://craftohtml.themezaa.com/images/demo-restaurant-blog-08.jpg",
      text: "Tales from the kitchen.",
      buttonText: "Tales",
    },
    {
      img: "https://craftohtml.themezaa.com/images/demo-restaurant-blog-09.jpg",
      text: "World-class dining here.",
      buttonText: "Dining",
    },
  ];

  return (
    <>
      <HeroSection
        heading={"Latest Blog"}
        subheading={"- Stories From Restaurant -"}
      />
      <section className="mx-container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {blogData.map((blog, index) => (
            <BlogImages
              key={index}
              img={blog.img}
              text={blog.text}
              buttonText={blog.buttonText}
            />
          ))}
        </div>
      </section>
      <FooterSection />
    </>
  );
};

export default Blog;
