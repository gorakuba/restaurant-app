import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../src/slices/ProductSlice';
import ModalReducer from '../src/slices/ModalSlice';
import SidebarReducer from '../src/slices/SidebarSlice';

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    modal: ModalReducer,
    sidebar: SidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
