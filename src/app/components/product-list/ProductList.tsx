'use client';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../GlobalRedux/store';
import { fetchNewProducts } from '@/app/GlobalRedux/Features/product/products-slice';

export default function NewProduct() {
  const dispatch = useDispatch<AppDispatch>();

  // Automatically fetch products when the component is mounted
  useEffect(() => {
    dispatch(fetchNewProducts());
  }, [dispatch]);

  return (
    <div className="container">
      {/* <h3>ProductList</h3> */}
    </div>
  );
}
