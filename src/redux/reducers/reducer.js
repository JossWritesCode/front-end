import {
  UPDATE_DONATION_AMOUNT,
  CLEAR_DONATION,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from "../actions/action";

export const initialState = {
  user: {
    // this information needs to be loaded if authed
    token: null,
    name: null,
    donation: {
      // pulled in from the donate form
      amount: 0, // will update onClick with button or when user types an amount in
      monthly: false
    },
    // payment is the object containing information which will be selected on another screen
    payment: {
      method: null,
      account: null
    }
  },
  loading: false,
  error: "",
  userInfo: {
    // don't save this information, it is available inside the login/sign up/donate form
    email: "",
    password: "",
    comfirmPassword: ""
  }
};

export const rootReducer = (state = initialState, action) => {
  // reducers need to be split due to complexity and so that we can group them with related actions
  switch (action.type) {
    case UPDATE_DONATION_AMOUNT:
      return {
        ...state,
        user: {
          ...state.user,
          donation: {
            amount: action.payload
          }
        }
      };
    case CLEAR_DONATION:
      return {
        ...state,
        user: {
          ...state.user,
          donation: {
            amount: 0 // setting to 0 is easier than subtracting
          }
        }
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
        loading: false,
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
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
