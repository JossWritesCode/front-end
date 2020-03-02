import axios from "axios";

export const UPDATE_DONATION_AMOUNT = "UPDATE_DONATION_AMOUNT";
export const CLEAR_DONATION = "CLEAR_DONATION";
//login actions
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
//sign up actions
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const HIDE_MODAL = "HIDE_MODAL";
export const SHOW_MODAL = "SHOW_MODAL";

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
