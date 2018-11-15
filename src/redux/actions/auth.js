import * as actions from '../../constants/actionsType'
import { auth } from './../../firebase';

// --- Actions
export function isLoading() {
  return {
      type: actions.GET_USER_LOGIN,
      isLoading: true
  };
}

export function setCurrentUser(user) {
  return {
      type: actions.GET_USER_LOGIN_SUCCESS,
      payload: user,
      isLoading: false
  };
}

// -- Actions dispatchers

export function login() {
  return dispatch => {
    // loading spiner...
    dispatch(isLoading());
    auth.googleSignIn(function(response) {
      if (!response.errorCode) {
        localStorage.setItem("user", JSON.stringify(response.user));
        dispatch(setCurrentUser(response.user));
      }
    })
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem("user");
    dispatch(setCurrentUser(null));
  };
}