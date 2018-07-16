export interface UserInfo {
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
  title: string;
  image: string;
  price: string;
  description: string;
  owner: UserInfo;
  category: Category;
}

export interface Review {
  title: string;
  description: string;
  rating: number;
  owner: UserInfo;
}

export interface Category {
  _id: string;
  name: string;
}

export interface AppState {
  user: UserInfo;
  categories: Category[];
  products: Product[];
  reviews: Review[];
}