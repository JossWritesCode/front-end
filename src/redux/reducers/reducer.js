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
} from '../actions/action';

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
  project:{
    id: '',
    projectname: '',
    description: '',
    username: '',
    bio: ''
  
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
      401: 'Invalid email or password was submitted, please try again.',
      500: 'There was an unexpected response trying to communicate with the server. Please try again later.'
    }
  },
  loading: {
    phase: '',
    active: false
  },

  projects: [],
  error: '',
  isFetching: false
};

const addInitialState = {
  projectname: '',
  description: '',
  username: '',
  bio: '',
  isFetching: false,
  error: ''
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
<<<<<<< Updated upstream
    default:
      return state;
=======
>>>>>>> Stashed changes
  }
};

export const rootReducer = (state = initialState, action) => {
  console.log('reducer', action);
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
          phase: 'Logging in...',
          active: true
        }
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: {
          phase: '',
          active: false
        },
        user: {
          ...state.user,
          model: action.payload
        }
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: {
          phase: '',
          active: false
        },
        auth: { ...state.auth, error: { status: action.payload } }
      };
    case REGISTER_START:
      return {
        ...state,
        loading: {
          phase: 'Registering...',
          active: true
        }
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: {
          phase: '',
          active: false
        },
        user: {
          ...state.user,
          model: action.payload.data
        }
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: {
          phase: '',
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
    case FETCH_PROJECT_START:
      return {
        ...state,
        error: '',
        isFetching: true
      };
    case FETCH_PROJECT_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: true,
        projects: action.payload
      };
    case FETCH_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
<<<<<<< Updated upstream
=======
    case CREATE_PROJECT:
      return{
        ...state,
        project: action.payload
      };
>>>>>>> Stashed changes

    default:
      return state;
  }
};
