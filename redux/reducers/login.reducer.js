import {LOGIN_ACTION ,SET_USERNAME_VALUE,SET_PASSWORD_VALUE,SET_MAIN_PAGE_INDEX} from '../actionTypes';
 
const user = (state = {}, action) => {
  switch (action.type) {
      case LOGIN_ACTION: { 
        return {
            ...state,
            ...action.user
        }
      }
      case SET_USERNAME_VALUE:{
        return {
          ...state,
            username_value : action.usernameValue
        }
      }
      case SET_PASSWORD_VALUE :{
        return {
          ...state,
          password_value : action.passwordValue
      }
    }
      case SET_MAIN_PAGE_INDEX :{
        return {
          ...state,
          page_index : action.pageIndex
      }
  }
  default:
    return state;
  }
};

export default user;