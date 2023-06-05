import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import WishSlice from "./wishSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
    wish: WishSlice,
  },
});
