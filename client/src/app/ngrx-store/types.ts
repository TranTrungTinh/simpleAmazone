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

export interface Category {
  _id: string;
  name: string;
}

export interface AppState {
  user: UserInfo;
  categories: Category[];
}