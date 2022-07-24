// import apiClient from '../utils/httpService';

// export const loginUser = async (dispatch, loginPayload) => {
//   try {
//     dispatch({ type: 'REQUEST_LOGIN' });
//     debugger;
//     let response = await apiClient.post('/api/v1/auth', loginPayload);
//     // let response = await fetch(`${ROOT_URL}/login`, requestOptions);
//     // let data = await response.json();

//     if (response) {
//       dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
//       //   localStorage.setItem('currentUser', JSON.stringify(data));
//       return data;
//     }

//     // dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
//     return;
//   } catch (error) {
//     dispatch({ type: 'LOGIN_ERROR', error: error });
//   }
// };

// export const logout = async (dispatch) => {
//   dispatch({ type: 'LOGOUT' });
//   localStorage.removeItem('currentUser');
//   localStorage.removeItem('token');
// };
