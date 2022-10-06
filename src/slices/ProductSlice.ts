import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../states/states';
import { ProductInterface } from '../typings';

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    },

    removeProductFromBasket: (state, action) => {
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem: ProductInterface) => basketItem.id === action.payload.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn('Can not remove it!');
      }

      return {
        ...state,
        basket: newBasket,
      };
    },

    removeAllFromBasket: (state) => {
      return {
        ...state,
        basket: [],
      };
    },
  },
});

export const { addToBasket, removeProductFromBasket, removeAllFromBasket } =
  productSlice.actions;
export default productSlice.reducer;
