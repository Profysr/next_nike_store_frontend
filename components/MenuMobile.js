import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Products", url: "/productPage" },
  { id: 4, name: "Categories", subMenu: true },
  { id: 5, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

const MenuMobile = ({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
  categories,
}) => {
  // return (
  //   <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
  //     {data.map((item) => {
  //       return (
  //         <React.Fragment key={item.id}>
  //           {!!item?.subMenu ? (
  //             <li
  //               className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
  //               onClick={() => setShowCatMenu(!showCatMenu)}
  //             >
  //               <div className="flex justify-between items-center">
  //                 {item.name}
  //                 <BsChevronDown size={14} />
  //               </div>

  //               {showCatMenu && (
  //                 <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
  //                   {categories?.map(({ attributes: c, id }) => {
  //                     return (
  //                       <Link
  //                         key={id}
  //                         href={`/category/${c.slug}`}
  //                         onClick={() => {
  //                           setShowCatMenu(false);
  //                           setMobileMenu(false);
  //                         }}
  //                       >
  //                         <li className="py-4 px-8 border-t flex justify-between">
  //                           {c.name}
  //                           <span className="opacity-50 text-sm">
  //                             {`(${c.products.data.length})`}
  //                           </span>
  //                         </li>
  //                       </Link>
  //                     );
  //                   })}
  //                 </ul>
  //               )}
  //             </li>
  //           ) : (
  //             <li className="py-4 px-5 border-b">
  //               <Link href={item?.url} onClick={() => setMobileMenu(false)}>
  //                 {item.name}
  //               </Link>
  //             </li>
  //           )}
  //         </React.Fragment>
  //       );
  //     })}
  //   </ul>
  // );
  return (
    <ul className="flex flex-col font-bold w-full h-{calc(100vh-50px)} absolute top-12 left-0 bg-white text-black/80 border-t-2 border-black/10 md:hidden">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {/* category menu starts  */}
            {item.subMenu ? (
              <li
                className="flex flex-col gap-2 border-b-2 border-black/10 "
                onClick={() => setShowCatMenu((curr) => !curr)}
              >
                <div className="flex justify-between gap-2 p-3 cursor-pointer">
                  {item.name}
                  <BsChevronDown size={16} />
                </div>
                {/* category subMenu starts  */}
                {showCatMenu && (
                  <ul className="flex flex-col relative left-0 w-[100vw] bg-gray-100">
                    {categories?.map(
                      ({
                        attributes: {
                          name,
                          slug,
                          products: { data: p },
                          id,
                        },
                      }) => (
                        <Link
                          href={`/category/${slug}`}
                          key={id}
                          className="flex justify-between p-3 w-full cursor-pointer border-b-2 border-black/10"
                          onClick={() => {
                            setShowCatMenu(false);
                            setMobileMenu(false);
                          }}
                        >
                          {name}
                          <span className="opacity-50">{`(${p.length})`}</span>
                        </Link>
                      )
                    )}
                  </ul>
                  //  category subMenu ends
                )}
                {/* category menu ends */}
              </li>
            ) : (
              // navbar menu starts without submenu attribute
              <li>
                <Link
                  href={item.url}
                  className="cursor-pointer p-3 block w-full border-b-2 border-black/10"
                  onClick={() => setMobileMenu(false)}
                >
                  {item.name}
                </Link>
              </li>
              // navbar menu ends
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
