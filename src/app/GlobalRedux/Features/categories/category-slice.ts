import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Category } from '../../../models/category';

export interface CategoriesState {
  newCategories: Category[];
  offerCategories: Category[];
  inProgress: boolean;
  error?: any;
}

const initialState: CategoriesState = {
  newCategories: [],
  offerCategories: [],
  inProgress: false,
};

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  const data: string[] = await response.json();

  // Map the string categories into Category objects
  const categories: Category[] = data.map((category, index) => ({
    id: index + 1,
    category,
  }));

  return categories;
});

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setOfferCategories: (state, action) => {
      state.offerCategories = action.payload;
    },
    clearOfferCategories: (state) => {
      state.offerCategories = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.inProgress = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.inProgress = false;
      state.newCategories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.error = action.error;
      state.inProgress = false;
    });
  },
});

export const { setOfferCategories, clearOfferCategories } = categorySlice.actions;
export default categorySlice.reducer;
