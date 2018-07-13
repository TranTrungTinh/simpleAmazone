export interface UserInfo {
  name: string;
  email: string;
  avatar: string;
  address?: {
    street: string;
    state: string;
    city: string;
    country: string;
    postalCode: string;
  }
}

export interface AppState {
  user: UserInfo;
  message: string;
}