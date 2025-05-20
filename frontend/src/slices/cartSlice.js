import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItme: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItme.find((x) => x._id === item._id);
      if (existingItem) {
        state.cartItme = state.cartItme.map((x) =>
          x._id === existingItem._id ? item : x
        );
      } else {
        state.cartItme = [...state.cartItme, item];
      }
      return updateCart(state);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
