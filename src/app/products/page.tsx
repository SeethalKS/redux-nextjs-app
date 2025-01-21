"use client";
import React from "react";

import ProductList from "../components/product-list/ProductList";
import NewProductList from "../components/product-card/ProductCard";
import NewProduct from "../components/product-list/ProductList";
import Login from "../components/login/Login";
import LoginList from "../components/login/LoginList";

export default function index() {
  return (
    <>
      <Login />
      <LoginList />
      <NewProduct />
      <NewProductList />
    </>
  );
}
