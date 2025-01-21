import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "@/app/models/cart";

interface CartState {
  items: Cart[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        id: number;
        title: string;
        image: string;
        qty?: number;
        price?: number;
      }>
    ) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push({
          ...action.payload,
          qty: action.payload.qty || 1,
          price: action.payload.price || 0,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        if (state.items[itemIndex].qty > 1) {
          state.items[itemIndex].qty -= 1;
        } else {
          state.items.splice(itemIndex, 1);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
