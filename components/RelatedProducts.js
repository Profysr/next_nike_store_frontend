// links
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
// pages
import ProductCard from "./ProductCard";
import Wrapper from "./Wrapper";

const RelatedProduct = ({ products, pagination, title }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="my-[50px] md:mt-[100px] capitalize">
      <Wrapper>
        {title ? (
          ""
        ) : (
          <div className="text-2xl font-bold mb-5 ">You might also like</div>
        )}
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          containerClass="mx-[10px]"
          itemClass="pb-[40px] px-[10px]"
          autoPlaySpeed={3000}
          infinite={true}
          autoPlay={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          pauseOnHover={true}
          focusOnSelect={true}
        >
          {pagination
            ? pagination.map((p) => (
                <ProductCard key={p?.id} data={p} pagination={pagination} />
              ))
            : products?.data?.map((p) => <ProductCard key={p?.id} data={p} />)}
        </Carousel>
      </Wrapper>
    </div>
  );
};
export default RelatedProduct;
