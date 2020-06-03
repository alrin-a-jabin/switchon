import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import formReducer from './formReducer';


export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  form:formReducer
});
