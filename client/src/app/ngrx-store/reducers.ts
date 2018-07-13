import { UserInfo } from './types';
import { 
  SET_USER, LOG_OUT, SET_MESSAGE, UPDATE_ADDRESS
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