import apiClient from '../../utils/httpService';
import jwt_decode from 'jwt-decode';
import {
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  REQUEST_LOGIN,
  LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SET_SUBSCRIPTION,
  SUCCESS,
  CREATE_SUBSCRIPTION_SESSION,
  ERROR,
  USER_UPDATE,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_ERROR,
  USER_UPDATE_RESET,
} from '../actionTypes';
import { isEmpty } from 'lodash';

const decodeToken = (token) => {
  return jwt_decode(token);
};

const setLocalStorageState = (token, user, exp) => {
  localStorage.setItem('app-token', token);
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('expiresAt', JSON.stringify(exp));
};

// register new user
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

// user login
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

// user logout
export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('app-token');
  localStorage.removeItem('expiresAt');
};

// update user details
export const updateUserDetails = async (user, dispatch, payload) => {
  try {
    dispatch({ type: USER_UPDATE });
    let response = await apiClient.put('/api/v1/auth', user, payload);
    let { data } = response;
    if (data) {
      let {
        data: { token },
      } = response;
      let { user, exp } = decodeToken(token);
      setLocalStorageState(token, user, exp);
      dispatch({ type: USER_UPDATE_SUCCESS, payload: { token, user } });
      return token;
    }

    dispatch({ type: USER_UPDATE_ERROR, error: response.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: USER_UPDATE_ERROR, error: error });
    return error;
  }
};

// create subscription
export const createSubscription = async (dispatch, payload) => {
  try {
    dispatch({ type: LOADING });
    const { data } = await apiClient.post(
      '/api/v1/subscriptiontypes/create-subscription-session',
      payload,
    );
    dispatch({ type: CREATE_SUBSCRIPTION_SESSION, payload: data });
    return data;
  } catch (error) {
    dispatch({ type: ERROR, error: error });
    return error;
  }
};

// fetch subscription type
export const getSetSubscription = async (dispatch, payload) => {
  try {
    dispatch({ type: LOADING });
    let subscription = {};
    const { data: data } = await apiClient.get('api/v1/subscriptiontypes/active-subscriptions');
    console.log('DATA FROM ACTIVE SUBSCRIPTIONS - ACTION');
    console.log(data);
    if (!isEmpty(data)) {
      subscription = data?.data[0];
      dispatch({ type: SET_SUBSCRIPTION, payload: subscription });
    } else {
      dispatch({ type: SET_SUBSCRIPTION, payload: subscription });
    }
    return subscription;
  } catch (error) {
    dispatch({ type: ERROR, error: error });
  }
};

// create billing
export const createBillingSession = async (dispatch, payload) => {
  try {
    dispatch({ type: LOADING });
    const { data } = await apiClient.get('api/v1/subscriptiontypes/customer-portal');
    console.log('2B: SUCCESS ACTION');
    console.log(data);
    dispatch({ type: SUCCESS });
    return data;
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR, error: error });
  }
};

export const createPaymentSession = async () => {};
