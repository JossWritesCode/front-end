import { combineReducers } from "redux";

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
  CLEAR_ERROR_STATUS,
  FETCH_PROJECT_START,
  FETCH_PROJECT_SUCCESS,
  FETCH_PROJECT_FAILURE,
  ADDPROJECT_START,
  ADDPROJECT_SUCCESS,
  ADDPROJECT_FAILURE,
  CREATE_PROJECT
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
  project: {
    id: "",
    projectname: "",
    description: "",
    username: "",
    bio: "",
    error: "",
    isFetching: false
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
    },
    loading: {
      phase: "",
      active: false
    }
  },

  projects: [],
  error: "",
  isFetching: false
};

const addInitialState = {
  projectname: "",
  description: "",
  username: "",
  bio: "",
  isFetching: false,
  error: ""
};

export const addReducer = (state = addInitialState, action) => {
  switch (action.type) {
    case ADDPROJECT_START: {
      return {
        ...state,
        isFetching: true
      };
    }
    case ADDPROJECT_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        projectname: action.payload.projectname,
        description: action.payload.description,
        username: action.payload.description,
        bio: action.payload.bio
      };
    }
    case ADDPROJECT_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    }
    default:
      return { ...state };
  }
};

const modal = (state = { ...initialState.modal }, action) => {
  console.log(state);
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        [action.payload]: { show: true }
      };
    case HIDE_MODAL:
      return {
        ...state,
        [action.payload]: { show: false }
      };

    default:
      return {
        ...state
      };
  }
};

const auth = (state = { ...initialState.auth }, action) => {
  switch (action.type) {
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

        error: { status: null }
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: {
          phase: "",
          active: false
        },
        error: { status: action.payload }
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
        error: { status: null }
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: {
          phase: "",
          active: false
        },
        error: { status: action.payload }
      };

    case CLEAR_ERROR_STATUS:
      return {
        ...state,
        error: { status: null }
      };

    default:
      return { ...state };
  }
};

const user = (state = { ...initialState.user }, action) => {
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
    default:
      return { ...state };
  }
};

const project = (state = { ...initialState.project }, action) => {
  console.log("reducer", action);
  // reducers need to be split due to complexity and we can group them with related actions to simplify this reducer
  switch (action.type) {
    case FETCH_PROJECT_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case FETCH_PROJECT_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: true,
        projects: action.payload
      };
    case FETCH_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case CREATE_PROJECT:
      return {
        ...state,
        project: action.payload
      };

    default:
      return { ...state };
  }
};

export const rootReducer = combineReducers({
  addReducer,
  auth,
  modal,
  user,
  project
});
