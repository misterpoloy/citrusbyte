import * as actions from '../../constants/actionsType'

const initialState = {
  isLoading: false,
  errors: [],
  users: [],
}

export default (state = { ...initialState }, action) => {
  switch (action.type) {
   case actions.GET_SHARED_LIST:
    return state
   case actions.GET_SHARED_LIST_SUCCESS:
    return {
      ...state,
      users: action.payload
    }
   default:
    return state
  }
 }