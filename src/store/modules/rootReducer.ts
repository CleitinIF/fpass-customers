import { combineReducers } from 'redux';
import customers from './customers/reducer';
import form from './form/reducer';


export default combineReducers({
  customers,
  form
});