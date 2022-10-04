import { ProductInterface, InitialStateInterface } from '../typings';

export const initialState: InitialStateInterface = {
  basket: [],
  details: [],
  modal: false,
  sidebar: false,
};

export const getBasketTotal = (basket: ProductInterface[]) =>
  basket?.reduce(
    (amount: number, product: ProductInterface) => product.price + amount,
    0
  );
