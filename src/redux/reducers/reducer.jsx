import {
  INCREASE_DONATION,
  CLEAR_DONATION,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../actionCreators/actions/action';

export const initialState = {
  donationAmount: 0,
  button: [
    { id: 1, price: 5 },
    { id: 2, price: 10 },
    { id: 3, price: 20 },
    { id: 4, price: 50 },
    { id: 5, price: 100 },
    { id: 6, price: 200 }
  ],
  loading: false,
  error: '',
  userInfo: {
    email: '',
    password: '',
    comfirmPassword: ''
  }
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_DONATION:
      return {
        ...state,
        donationAmount: state.donationAmount + action.payload.price
      };
    case CLEAR_DONATION:
      return {
        ...state,
        donationAmount: state.donationAmount - action.payload.price
      };
    case LOGIN_START:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case SIGNUP_START:
      return {
        ...state,
        loading: true
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
