import Image from "next/image";
import Link from "next/link";
import React from "react";

const EmptyCart = ({ title, desc, descOther, btnTitle }) => {
  return (
    <div className="flex-[2] flex flex-col items-center pb-[50px] md:mt-14 capitalize ">
      <Image src="/empty-cart.jpg" alt="" width={300} height={400} />
      <span className="text-lg font-bold">{title}</span>
      <span className="text-center mt-4">
        {desc}
        <br />
        {descOther}
      </span>
      <Link
        href="/"
        className="py-4 px-8 rounded-full text-white text-lg mb-3 mt-8 font-semibold bg-black hover:scale-95 transition-transform duration-200 active:opacity-75 "
      >
        {btnTitle}
      </Link>
    </div>
  );
};

export default EmptyCart;
