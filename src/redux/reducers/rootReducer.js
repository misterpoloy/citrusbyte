import { combineReducers } from 'redux';
// customr educers to import
import auth from './auth';
import shared from './shared';

export default combineReducers({
 auth,
 shared,
});