import {
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  REQUEST_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from '../actionTypes';

let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : '';
let token = localStorage.getItem('app-token') ? JSON.parse(localStorage.getItem('app-token')) : '';
let expiresAt = localStorage.getItem('expiresAt')
  ? JSON.parse(localStorage.getItem('expiresAt'))
  : '';

const isAuthenticated = () => {
  if (!token || !expiresAt) {
    return false;
  }

  return new Date().getTime() / 1000 < expiresAt;
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
};

export const AppReducer = (initialState, action) => {
  switch (action.type) {
    case REGISTER:
    case REQUEST_LOGIN:
      return {
        ...initialState,
        loading: true,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
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
      debugger;
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
        isAuthenticated: false,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
