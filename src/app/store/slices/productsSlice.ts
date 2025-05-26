
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/lib/constant/sampleData';

export interface ProductWithImages extends Omit<Product, 'image'> {
  coverImage: string;
  productImages: string[];
  image: string; // Keep for backward compatibility
}

interface ProductsState {
  products: ProductWithImages[];
}

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      // Convert old products to new format
      state.products = action.payload.map(product => ({
        ...product,
        coverImage: product.image,
        productImages: [],
      }));
    },
    addProduct: (state, action: PayloadAction<Omit<ProductWithImages, 'id' | 'lastRestocked'>>) => {
      const newProduct: ProductWithImages = {
        ...action.payload,
        id: Date.now().toString(),
        lastRestocked: new Date().toISOString().split('T')[0],
      };
      state.products.push(newProduct);
    },
    updateProductStock: (state, action: PayloadAction<{ productId: string; newStock: number }>) => {
      const { productId, newStock } = action.payload;
      const productIndex = state.products.findIndex(p => p.id === productId);
      if (productIndex !== -1) {
        state.products[productIndex].stock = newStock;
        state.products[productIndex].lastRestocked = new Date().toISOString().split('T')[0];
      }
    },
  },
});

export const { setProducts, addProduct, updateProductStock } = productsSlice.actions;
export default productsSlice.reducer;
