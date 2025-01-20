'use client';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../GlobalRedux/store';
import { fetchCategories } from '@/app/GlobalRedux/Features/categories/category-slice';

export default function Categories() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="container">
      <h3>Categories Available.....</h3>
    </div>
  );
}
