import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import cartReducer from '../features/cart/cartSlice'; // Add this line

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer, // Add this line
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
