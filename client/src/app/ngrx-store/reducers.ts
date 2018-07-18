import { UserInfo, Category, Product, Review, Cart, CartItem } from './types';
import { 
  SET_USER, LOG_OUT, SET_CATEGORIES, CREATE_CATEGORY, SET_PRODUCTS,
  SET_PRODUCTS_BY_CAT, SET_REVIEWS, ADD_REVIEW, ADD_PRODUCT, UPDATE_PRODUCT, 
  DELETE_PRODUCT, CLEAR_CART
} from './actionTypes';

export function userReducer(state: UserInfo = null, action) {
  if(action.type === SET_USER) return action.userInfo;
  if(action.type === LOG_OUT) return null;
  return state;
}

export function categoriesReducer(state: Category[] = [], action) {
  if(action.type === SET_CATEGORIES) return action.categories;
  if(action.type === CREATE_CATEGORY) return [action.category, ...state];
  return state;
}

export function productByOwnerReducer(state: Product[] = [], action) {
  if(action.type === SET_PRODUCTS) return action.products;
  return state;
}

export function productByCatReducer(state: Product[] = [], action) {
  if(action.type === SET_PRODUCTS_BY_CAT) return action.products;
  return state;
}

export function reviewReducer(state: Review[] = [], action) {
  if(action.type === SET_REVIEWS) return action.reviews;
  if(action.type === ADD_REVIEW) return [action.review, ...state];
  return state;
}

const cart: Cart = { total: 0, products: [] }
const totalPrice = (products: CartItem[]) => {
  if(!products.length) return 0;
  return products.map(e => +e.price * +e.quantity).reduce((a, b) => a + b);
}

export function cartReducer(state: Cart = cart, action) {
  if(action.type === ADD_PRODUCT) {
    const item: CartItem = action.payload;
    const existed = state.products.find(e => e._id === item._id);
    if(existed) {
      existed.quantity++;
      return { products: state.products, total: totalPrice(state.products) }
    }
    const newState = {
      products: [...state.products, item ], 
      total: totalPrice([...state.products, item ])
    }
    return newState;
  }
  if(action.type === UPDATE_PRODUCT) {
    const item: CartItem = action.payload;
    const products = state.products.map(cart => {
      if(cart._id !== item._id) return cart;
      return { ...cart, quantity: item.quantity }
    });
    return { products, total: totalPrice(products) };
  }
  if(action.type === DELETE_PRODUCT) {
    const products = state.products.filter(item => item._id !== action._id);
    return { products, total: totalPrice(products) };
  }
  if(action.type === CLEAR_CART) {
    return cart;
  }
  return state;
}