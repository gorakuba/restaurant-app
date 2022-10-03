export interface ProductInterface {
  id: number;
  name: string;
  price: number;
  description: string;
  count: number;
}

export interface MenuItemInterface {
  id: number;
  name: string;
}

export interface InitialStateInterface {
  basket: ProductInterface[];
  details: ProductInterface[];
  modal: boolean;
  sidebar: boolean;
}
