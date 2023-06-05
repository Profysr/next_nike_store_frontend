import EmptyCart from "@/components/EmptyCart";
import Wrapper from "@/components/Wrapper";
import FavouriteProducts from "@/components/favouriteProduct";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const { wishItems } = useSelector((state) => state.wish);

  return (
    <Wrapper>
      {wishItems.length > 0 && (
        <section className="body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-[34px] md:text-[50px] mb-5 text-center md:text-start font-semibold leading-tight">
              Your <span className="text-red-600 font-bold">Wishlist</span>
              <p className="text-base md:text-lg text-black/70">
                All Your Explored Products
              </p>
            </div>
            <div className="flex flex-wrap -m-4 justify-center md:justify-start">
              {/* STARTS HERE THE PRODUCT CARDS */}
              {wishItems.map((item) => (
                <FavouriteProducts key={item.id} data={item} />
              ))}
              {/* ENDS HERE THE PRODUCT CARDS */}
            </div>
          </div>
        </section>
      )}

      {/* This is empty screen */}
      {wishItems.length < 1 && (
        <EmptyCart
          title={"Why Your Wishlist still empty!!"}
          desc={"looks like you have not liked anything in our top categories"}
          descOther={"go ahead explore our more top categories"}
          btnTitle={"Go and Explore"}
        />
      )}
    </Wrapper>
  );
};

export default Wishlist;
