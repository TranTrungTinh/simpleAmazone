import { UserInfo, Category } from './types';
import { 
  SET_USER, LOG_OUT, SET_MESSAGE, SET_CATEGORIES, CREATE_CATEGORY
} from './actionTypes';

export function userReducer(state: UserInfo = null, action) {
  if(action.type === SET_USER) return action.userInfo;
  if(action.type === LOG_OUT) return null;
  return state;
}

export function messageReducer(state: string = '', action) {
  if(action.type === SET_MESSAGE) return action.message;
  return state;
}

export function categoriesReducer(state: Category[] = [], action) {
  if(action.type === SET_CATEGORIES) return action.categories;
  if(action.type === CREATE_CATEGORY) return [action.category, ...state];
  return state;
}