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

    addToBasketIfProductExist: (state, action) => {
      let newBasket: ProductInterface[];

      let isExistInBasket = state.basket.map(
        (product) => product.id === action.payload.id
      );

      if (isExistInBasket) {
        newBasket = [...state.basket];
      } else {
        newBasket = [...state.basket, action.payload];
      }

      return {
        ...state,
        basket: newBasket,
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

    showProductDetails: (state, action) => {
      return {
        ...state,
        details: [...state.details, action.payload],
      };
    },

    hideProductDetails: (state) => {
      return {
        ...state,
        details: [],
      };
    },
  },
});

export const {
  addToBasket,
  addToBasketIfProductExist,
  removeProductFromBasket,
  removeAllFromBasket,
  showProductDetails,
  hideProductDetails,
} = productSlice.actions;
export default productSlice.reducer;
