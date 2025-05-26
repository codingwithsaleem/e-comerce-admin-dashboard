
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { setProducts } from '@/app/store/slices/productsSlice';
import { products as sampleProducts } from '@/lib/constant/sampleData';

export const useInitializeProducts = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.products.products);

  useEffect(() => {
    // Only initialize if no products exist (first time load)
    if (products.length === 0) {
      dispatch(setProducts(sampleProducts));
    }
  }, [dispatch, products.length]);
};
