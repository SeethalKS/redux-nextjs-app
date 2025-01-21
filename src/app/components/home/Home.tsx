"use client";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../GlobalRedux/store";
import { fetchimages } from "@/app/GlobalRedux/Features/home/home-slice";

export default function NewProduct() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchimages());
  }, [dispatch]);

  return <div className="container"></div>;
}
