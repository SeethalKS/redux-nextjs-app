import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Home } from "../../../models/home";

export interface HomeState {
  newImages: Home[];
  Images: Home[];
  inProgress: boolean;
  error?: any;
}

const initialState: HomeState = {
  newImages: [],
  Images: [],
  inProgress: false,
};

export const fetchimages = createAsyncThunk("home/fetchImages", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }
  return response.json();
});

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.Images = action.payload;
    },
    clearImages: (state) => {
      state.Images = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchimages.pending, (state) => {
      state.inProgress = true;
    });
    builder.addCase(fetchimages.fulfilled, (state, action) => {
      state.inProgress = false;
      state.newImages = action.payload;
    });
    builder.addCase(fetchimages.rejected, (state, action) => {
      state.error = action.error.message;
      state.inProgress = false;
    });
  },
});

export const { setImages, clearImages } = homeSlice.actions;
export default homeSlice.reducer;
