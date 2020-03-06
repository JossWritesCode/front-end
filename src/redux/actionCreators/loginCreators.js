import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/action';
import axios from 'axios';

export const loginStart = () => {
  return {
    type: LOGIN_START
  };
};

export const loginSuccess = response => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token: response.data.token
    }
  };
};

export const loginFailure = err => {
  return {
    type: LOGIN_FAILURE,
    payload: err
  };
};

export const login = credentials => async dispatch => {
  dispatch(loginStart());

  const url = 'https://vrfundingapp.herokuapp.com/auth/login';
  try {
    const response = await axios.post(url, credentials);
    console.log(response);
    localStorage.setItem('token', response.data.token);
    dispatch(loginSuccess(response));
    return response;
  } catch (err) {
    console.log(err['response']);
    dispatch(loginFailure(err['response'].status));
    throw new Error(err);
  }
};
