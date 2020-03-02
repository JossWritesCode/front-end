import axios from "axios";

export const UPDATE_DONATION_AMOUNT = "UPDATE_DONATION_AMOUNT";
export const CLEAR_DONATION = "CLEAR_DONATION";
//login actions
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
//sign up actions
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const donateMoney = donate => dispatch => {
  //payload for money donated
  console.log(donate);

  dispatch({
    type: UPDATE_DONATION_AMOUNT,
    payload: donate
  });
};
export const clearAmount = donate => dispatch => {
  //clear the amount of donated money
  console.log(donate);

  dispatch({
    type: CLEAR_DONATION,
    payload: donate
  });
};
