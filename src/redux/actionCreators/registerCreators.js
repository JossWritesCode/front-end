import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "../actions/action";
import axios from "axios";

export const registerStart = () => {
  return {
    type: REGISTER_START
  };
};

export const registerSuccess = data => {
  return {
    type: REGISTER_SUCCESS,
    payload: data
  };
};

export const registerFailure = err => {
  return {
    type: REGISTER_FAILURE,
    payload: err
  };
};

export const register = credentials => async dispatch => {
  dispatch(registerStart());

  const url = "https://vrfundingapp.herokuapp.com/auth/register";
  try {
    const response = await axios.post(url, credentials);
    dispatch(registerSuccess(response));
    return response;
  } catch (err) {
    dispatch(
      registerFailure("Something went wrong registering, please try again.")
    );
    throw new Error(err);
  }
};
