export interface UserInfo {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  isSeller: boolean;
  address?: Address
}

export interface Address {
  street: string;
  state: string;
  city: string;
  country: string;
  postalCode: string;
}

export interface Product {
  _id: string;
  title: string;
  image: string;
  price: string;
  description: string;
  owner: UserInfo;
  category: Category;
}

export interface Review {
  _id: string;
  title: string;
  description: string;
  rating: number;
  owner: UserInfo;
}

export interface Category {
  _id: string;
  name: string;
}

export interface CartItem {
  _id: string;
  price: number;
  image: string;
  quantity: number;
  owner: string;
  category: string;
}

export interface Cart {
  total: number;
  products: CartItem[];
}

export interface AppState {
  user: UserInfo;
  categories: Category[];
  products: Product[];
  reviews: Review[];
  cart: Cart
}