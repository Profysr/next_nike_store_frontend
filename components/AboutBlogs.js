import React from "react";
import BlogPost from "./BlogPost";
// import Wrapper from "./Wrapper";

const AboutBlogs = () => {
  return (
    <>
      <BlogPost
        title={"Jordan"}
        description={
          "With their superior performance gear, stylish designs, and thriving community, Nike offers more than just products – it offers a way of life. Fuel your passion, set ambitious goals, and let Nike be your partner in achieving greatness."
        }
        src={"/b1.jpg"}
        slug={"/category/jordan"}
        className={"sm:flex-row"}
      />
      <BlogPost
        title={"Air Max"}
        description={
          "With their superior performance gear, stylish designs, and thriving community, Nike offers more than just products – it offers a way of life. Fuel your passion, set ambitious goals, and let Nike be your partner in achieving greatness."
        }
        src={"/b2.jpg"}
        slug={"/category/air-max"}
        className={"sm:flex-row-reverse"}
      />
      <BlogPost
        title={"Customize with Nike by you"}
        description={
          "With their superior performance gear, stylish designs, and thriving community, Nike offers more than just products – it offers a way of life. Fuel your passion, set ambitious goals, and let Nike be your partner in achieving greatness."
        }
        src={"/b3.jpg"}
        slug={"/category/athlete-shoes"}
        className={"sm:flex-row"}
      />
      <BlogPost
        title={"Best Arrivals"}
        description={
          "With their superior performance gear, stylish designs, and thriving community, Nike offers more than just products – it offers a way of life. Fuel your passion, set ambitious goals, and let Nike be your partner in achieving greatness."
        }
        src={"/b4.jpg"}
        slug={"/productPage"}
        className={"sm:flex-row-reverse"}
      />
    </>
  );
};

export default AboutBlogs;
