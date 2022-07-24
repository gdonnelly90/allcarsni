import apiClient from '../../utils/httpService';
import jwt_decode from 'jwt-decode';
import {
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  REQUEST_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from '../actionTypes';

const decodeToken = (token) => {
  return jwt_decode(token);
};

const setLocalStorageState = (token, user, exp) => {
  localStorage.setItem('app-token', JSON.stringify(token));
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('expiresAt', JSON.stringify(exp));
};

export const register = async (dispatch, registerPayload) => {
  try {
    dispatch({ type: REGISTER });
    let response = await apiClient.post('/api/v1/users/register', registerPayload);
    if (response) {
      let {
        data: { token },
      } = response;
      let { user, exp } = decodeToken(token);
      setLocalStorageState(token, user, exp);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { token, user },
      });
      return token;
    }
  } catch (error) {
    dispatch({ type: REGISTER_ERROR, error: error });
  }
};

export const loginUser = async (dispatch, loginPayload) => {
  try {
    dispatch({ type: REQUEST_LOGIN });
    let response = await apiClient.post('/api/v1/auth', loginPayload);
    let { data } = response;
    if (data) {
      let {
        data: { token },
      } = response;
      let { user, exp } = decodeToken(token);
      setLocalStorageState(token, user, exp);
      dispatch({ type: LOGIN_SUCCESS, payload: { token, user } });
      return token;
    }

    dispatch({ type: LOGIN_ERROR, error: response.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, error: error });
    return error;
  }
};

export const logout = (dispatch) => {
  dispatch({ type: LOGOUT });
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};
