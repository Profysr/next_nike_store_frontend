import { removeFromFavourite } from "@/store/wishSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

const FavouriteProducts = ({ data }) => {
  const dispatch = useDispatch();
  const p = data?.attributes;
  return (
    <div class="lg:w-1/4 md:w-1/2 p-4">
      <Link
        key={data?.id}
        href={`/product/${p?.slug}`}
        className="w-full rounded-lg max-w-[340px] md:basis-[300px] transform duration-200 hover:scale-105 cursor-pointer bg-white overflow-hidden flex flex-col justify-center"
      >
        {/* <a class="block relative h-48 rounded overflow-hidden"> */}
        <Image
          width={420}
          height={260}
          class="object-cover object-center w-full h-full block"
          src={p.thumbnail.data.attributes.url}
          alt={p.name}
        />
      </Link>
      {/* </a> */}
      <div class="mt-4">
        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
          {p.subtitle}
        </h3>
        <h2 class="text-gray-900 title-font text-lg font-medium">{p.name}</h2>
        {/* <p class="mt-1">Rs : {p.price}</p> */}
        <div className="flex items-center justify-between text-black/50 ">
          <p className="text-lg font-semibold mr-2">Rs {p?.price}</p>
          <RiDeleteBin6Line
            onClick={() => dispatch(removeFromFavourite({ id: data.id }))}
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FavouriteProducts;
