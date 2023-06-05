// import { discountPercentage } from "@/utils/helper";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// const ProductCard = ({ data: { attributes: p, id } }) => {
//   return (
//     <Link
//       href={`/product/${p.slug}`}
//       className="transform overflow-hidden bg-white duration-200 hover:scale-105 curs: r-pointer"
//     >
//       <Image
//         width={400}
//         height={400}
//         src={p.thumbnail.data.attributes.url}
//         alt={p.name}
//       />
//       <div className="p-4 text-black/[0.9]">
//         <h2 className="text-lg font-medium">{p.name}</h2>
//         <div className="flex items-center text-black/[0.5]">
//           <p className="mr-2 text-lg font-semibold">Rs: {p.price}</p>

//           {p.original_price && (
//             <>
//               <p className="text-base  font-medium line-through">
//                 Rs: {p.original_price}
//               </p>
//               <p className="ml-auto text-base font-medium text-green-500">
//                 {discountPercentage(p.original_price, p.price)}% off
//               </p>
//             </>
//           )}
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { discountPercentage } from "@/utils/helper";

const ProductCard = ({ data }) => {
  const { attributes: p, id } = data;
  return (
    <Link
      key={id}
      href={`/product/${p?.slug}`}
      className="w-full rounded-lg max-w-[340px] md:basis-[300px] transform duration-200 hover:scale-105 cursor-pointer bg-white overflow-hidden flex flex-col justify-center"
    >
      <Image
        src={p?.thumbnail?.data?.attributes?.url}
        alt={p?.name}
        className="rounded-lg object-cover"
        width={300}
        height={300}
      />
      {/* Product Card Description  */}
      <div className="capitalize p-1 sm:p-4 text-black/90">
        <h2 className="text-lg font-medium">{p?.name}</h2>
        <div className="flex items-center text-black/50 ">
          <p className="text-lg font-semibold mr-2">Rs {p?.price}</p>
          {p?.original_price && (
            <>
              <p className="hidden sm:block text-base font-medium line-through ">
                {p?.original_price}
              </p>
              <p className="text-green-500 font-medium text-base ml-auto">
                {discountPercentage(p?.original_price, p?.price)}% off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
