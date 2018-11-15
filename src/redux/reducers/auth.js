import * as actions from '../../constants/actionsType'

const initialState = {
  isLoading: false,
  errors: [],
  user: null,
}

export default (state = { ...initialState }, action) => {
  switch (action.type) {
   case actions.GET_USER_LOGIN:
    return {
      ...state,
      isLoading: action.isLoading
    }
    case actions.GET_USER_LOGIN_SUCCESS:
    return {
      ...state,
     user: action.payload
    }
   default:
    return state
  }
 }