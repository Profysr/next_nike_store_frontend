// import React from "react";
import ProductCard from "./ProductCard";
import RelatedProduct from "./RelatedProducts";

const HeroMain = ({ title, description, pagination }) => {
  return (
    <>
      <div className="text-center max-w-[800px] mx-auto my-[30px]">
        <div className="text-[34px] md:text-[54px] mb-5 font-bold leading-tight">
          {/* Get Ready to Ignite Your Inner Athlete */}
          {title}
        </div>
        <div className="text-md md:text-xl">{description}</div>
      </div>

      <RelatedProduct pagination={pagination} title={title} />
      {/* <div className="flex justify-center items-center flex-wrap gap-4 my-14 px-5 md:px-0">
        {pagination?.map((p) => {
          return <ProductCard key={p?.id} data={p} />;
        })}
      </div> */}
    </>
  );
};

export default HeroMain;
