"use client";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Features/product/products-slice";
import categoryReducer from "./Features/categories/category-slice";
import homeReducer from "./Features/home/home-slice";
import CartReducer from "./Features/cart/cart-slice";
import loginReducer from "./Features/login/login-slice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
    home: homeReducer,
    Cart: CartReducer,
    login: loginReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
