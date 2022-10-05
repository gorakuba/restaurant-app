export interface ProductInterface {
  id: number;
  name: string;
  price: number;
  description: string;
  count: number;
  photoSrc: string;
}

export interface MenuItemInterface {
  id: number;
  name: string;
}

export interface CodeInterface {
  code: string;
  value: number;
}

export interface InitialStateInterface {
  basket: ProductInterface[];
  details: ProductInterface[];
  modal: boolean;
  sidebar: boolean;
}
