import {
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_SIGNUP_PENDING,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_LOGOUT,
  GET_SNACKS,
  GET_REVIEWS,
  DELETE_REVIEW
} from '../actions/auth.actions';

let initialState = {
  isLoading: false,
  user: {},
  showLoginError: false,
  showSignupError: false,
  snacks: [],
  reviews: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_PENDING:
      return {...state, isLoading: true};
    case USER_LOGIN_SUCCESS:
      return {...state, isLoading: false, user: action.payload};
    case USER_LOGIN_FAILED:
      return {...state, isLoading: false, showLoginError: true};
    case USER_SIGNUP_PENDING:
      return {...state, isLoading: true};
    case USER_SIGNUP_SUCCESS:
      return {...state, isLoading: false};
    case USER_SIGNUP_FAILED:
      return {...state, isLoading: false, showSignupError: true};
    case USER_LOGOUT:
      return {...state, user: {}};
    case GET_SNACKS:
      return {...state, snacks: action.payload};
    case GET_REVIEWS:
      return {...state, reviews: action.payload}
    case DELETE_REVIEW:
      return {...state}
    default:
      return state;
  }
};