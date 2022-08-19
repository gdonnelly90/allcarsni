import {
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  REQUEST_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  LOADING,
  ERROR,
  REQUEST_CREATE_SUBSCRIPTION,
  SET_SUBSCRIPTION,
  SUCCESS,
  CREATE_SUBSCRIPTION_SESSION,
  USER_UPDATE,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_ERROR,
  USER_UPDATE_RESET,
} from '../actionTypes';
import { logout } from './actions';
import { getLocalUser, setLocalUser } from '../../services/localStorage.service';

let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : '';
let token = localStorage.getItem('app-token') || '';
let expiresAt = localStorage.getItem('expiresAt')
  ? JSON.parse(localStorage.getItem('expiresAt'))
  : '';

const isAuthenticated = () => {
  if (!token || !expiresAt) {
    return false;
  }

  return new Date().getTime() / 1000 < expiresAt ? true : logout();
};

const isAdmin = (user = {}) => {
  return user?.roles?.includes('admin');
};

export const initialState = {
  user: '' || user,
  token: '' || token,
  expiresAt: '' || expiresAt,
  isAuthenticated: isAuthenticated(),
  isAdmin: isAdmin(user) || false,
  loading: false,
  errorMessage: null,
  session: null,
};

export const AppReducer = (initialState, action) => {
  switch (action.type) {
    case REGISTER:
    case REQUEST_LOGIN:
    case REQUEST_CREATE_SUBSCRIPTION:
    case LOADING:
    case USER_UPDATE:
      return {
        ...initialState,
        loading: true,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
    case USER_UPDATE_SUCCESS:
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.token,
        isAdmin: isAdmin(action.payload.user),
        isAuthenticated: true,
        loading: false,
      };
    case LOGOUT:
      localStorage.removeItem('user');
      localStorage.removeItem('expiresAt');
      localStorage.removeItem('app-token');
      return {
        ...initialState,
        user: '',
        token: '',
        isAdmin: false,
        isAuthenticated: false,
      };
    case REGISTER_ERROR:
    case LOGIN_ERROR:
    case ERROR:
    case USER_UPDATE_ERROR:
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
        isAuthenticated: false,
      };
    case CREATE_SUBSCRIPTION_SESSION:
      return {
        ...initialState,
        session: action.payload.session,
        loading: false,
      };
    case SET_SUBSCRIPTION:
      // update user local storage
      const user = getLocalUser();
      setLocalUser({ ...user, subscription: action.payload });
      return {
        ...initialState,
        session: initialState.session,
        user: { ...user, subscription: action.payload },
        loading: false,
      };
    case SUCCESS:
      return {
        ...initialState,
        loading: false,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type || 'No type'}`);
  }
};
