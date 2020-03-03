import {
  UPDATE_DONATION_AMOUNT,
  CLEAR_DONATION,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  SHOW_MODAL,
  HIDE_MODAL,
  CLEAR_ERROR_STATUS
} from "../actions/action";

export const initialState = {
  modal: {
    confirmationModal: {
      show: false
    },
    authModal: {
      show: false
    },
    sideMenuModal: {
      show: false
    }
  },
  user: {
    model: null,
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
  auth: {
    error: {
      status: null
    },
    errorResponse: {
      401: "Invalid email or password was submitted, please try again.",
      500: "There was an unexpected response trying to communicate with the server. Please try again later."
    }
  },
  loading: {
    phase: "",
    active: false
  }
};

export const rootReducer = (state = initialState, action) => {
  // reducers need to be split due to complexity and we can group them with related actions to simplify this reducer
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
    case SHOW_MODAL:
      return {
        ...state,
        modal: { ...state.modal, [action.payload]: { show: true } }
      };
    case HIDE_MODAL:
      return {
        ...state,
        modal: { ...state.modal, [action.payload]: { show: false } }
      };
    case LOGIN_START:
      return {
        ...state,
        loading: {
          phase: "Logging in...",
          active: true
        }
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: {
          phase: "",
          active: false
        },
        user: {
          ...state.user,
          model: action.payload
        },
        auth: {
          ...state.auth,
          error: { status: null }
        }
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: {
          phase: "",
          active: false
        },
        auth: { ...state.auth, error: { status: action.payload } }
      };
    case REGISTER_START:
      return {
        ...state,
        loading: {
          phase: "Registering...",
          active: true
        }
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: {
          phase: "",
          active: false
        },
        user: {
          ...state.user,
          model: action.payload.data
        },
        auth: {
          ...state.auth,
          error: { status: null }
        }
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: {
          phase: "",
          active: false
        },
        auth: { ...state.auth, error: { status: action.payload } }
      };

    case CLEAR_ERROR_STATUS:
      return {
        ...state,
        auth: {
          ...state.auth,
          error: { status: null }
        }
      };

    default:
      return state;
  }
};
