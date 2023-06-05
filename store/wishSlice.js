import { createSlice } from "@reduxjs/toolkit";

export const WishSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishItems: [],
  },
  reducers: {
    addToFavourite: (state, action) => {
      const item = state.wishItems.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity++;
        item.attributes.price = item.oneQuantityPrice * item.quantity;
      } else {
        state.wishItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromFavourite: (state, action) => {
      state.wishItems = state.wishItems.filter(
        (p) => p.id !== action.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToFavourite, removeFromFavourite } = WishSlice.actions;

export default WishSlice.reducer;
