import { UserInfo, Category, Product, Review } from './types';
import { 
  SET_USER, LOG_OUT, SET_CATEGORIES, CREATE_CATEGORY, SET_PRODUCTS,
  SET_PRODUCTS_BY_CAT, SET_REVIEWS, ADD_REVIEW
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