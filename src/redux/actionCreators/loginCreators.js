import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/action";
import axios from "axios";

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

  const url = "https://vrfundingapp.herokuapp.com/auth/login";
  try {
    const response = await axios.post(url, credentials);
    dispatch(loginSuccess(response));
  } catch (err) {
    dispatch(
      loginFailure("Something went wrong signing in, please try again.")
    );
  }
};
