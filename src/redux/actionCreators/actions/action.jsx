import axios from 'axios';

export const INCREASE_DONATION = 'INCREASE_DONATION';
export const CLEAR_DONATION = 'CLEAR_DONATION';
//login actions
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
//sign up actions
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const donateMoney = donate => dispatch => {
  //payload for money donated
  console.log(donate);

  dispatch({
    type: INCREASE_DONATION,
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
export const login_start = event => dispatch => {
  console.log(event);
  dispatch({
    type: LOGIN_START,
    payload: event
  });
}

export const login_success = event => dispatch => {
  console.log(event);

  dispatch({
    type: LOGIN_SUCCESS,
    payload: event
  });

}

export const login_failure = event => dispatch => {
  console.log(event);

  dispatch({
    type: LOGIN_FAILURE,
    payload: event
  })
}

export const signUpStart = event => dispatch => {
  console.log(event);
  dispatch({
    type: SIGNUP_START,
    payload: event
  });
}
export const signUpSuccess = event => dispatch => {
  console.log(event);
  dispatch({
    type: SIGNUP_SUCCESS,
    payload: event
  });
};
export const signUpFailure = event => dispatch => {
  console.log(event);
  dispatch({
    type: SIGNUP_FAILURE,
    payload: event
  });
};

