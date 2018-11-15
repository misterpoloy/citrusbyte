import * as actions from '../../constants/actionsType'
import { db } from './../../firebase';

// --- Actions
export function isLoading() {
  return {
      type: actions.GET_SHARED_LIST,
      isLoading: true
  };
}

export function setSharedUsers(users) {
  return {
      type: actions.GET_SHARED_LIST_SUCCESS,
      payload: users,
      isLoading: false
  };
}

// -- Actions dispatchers

export function getUsers() {
  return dispatch => {
    // loading spiner...
    dispatch(isLoading());
    db.query('user', function(response) {
      if (!response.error) {
        console.log(response)
        dispatch(setSharedUsers(response));
      }
    })
  };
}
