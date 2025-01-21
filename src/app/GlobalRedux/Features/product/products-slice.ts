import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../models/product";

export interface ProductsState {
  newProducts: Product[];
  offerProducts: Product[];
  inProgress: boolean;
  error?: any;
}

const initialState: ProductsState = {
  newProducts: [],
  offerProducts: [],
  inProgress: false,
};

export const fetchNewProducts = createAsyncThunk(
  "products/fetchNewProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setOfferProducts: (state, action) => {
      state.offerProducts = action.payload;
    },
    clearOfferProducts: (state) => {
      state.offerProducts = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNewProducts.pending, (state) => {
      state.inProgress = true;
    });
    builder.addCase(fetchNewProducts.fulfilled, (state, action) => {
      state.inProgress = false;
      state.newProducts = action.payload;
    });
    builder.addCase(fetchNewProducts.rejected, (state, action) => {
      state.error = action.error;
      state.inProgress = false;
    });
  },
});

export const { setOfferProducts, clearOfferProducts } = productSlice.actions;
export default productSlice.reducer;
