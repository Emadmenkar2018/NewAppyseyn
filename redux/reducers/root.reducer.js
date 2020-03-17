import {combineReducers} from 'redux';
import test from './test.reducer';
import user from './login.reducer'; 
import user_meals from './meal.reducer'; 

export default combineReducers({
  test,
  user, 
  user_meals
});