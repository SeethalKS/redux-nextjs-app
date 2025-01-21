"use client";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../GlobalRedux/store";
import { fetchNewProducts } from "@/app/GlobalRedux/Features/product/products-slice";

export default function NewProduct() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchNewProducts());
  }, [dispatch]);

  return <div className="container"></div>;
}
