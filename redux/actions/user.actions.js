import {LOGIN_ACTION ,SET_USERNAME_VALUE , SET_PASSWORD_VALUE, SET_MAIN_PAGE_INDEX} from '../actionTypes'
import axios from 'axios'; 
import {loginApiUrl} from '../../constants/apiUrls';
// import {addError, removeError} from './errors'
// import {addSuccess, removeSuccess} from './successes'

export function loginUser(user){
    return {
        type: LOGIN_ACTION,
        user
    }
} 

export function signinUser(userdata){ 
    console.log('action',userdata)
    return dispatch => { 
        return new Promise((resolve, reject) => {
            let bodyFormData = new FormData();  
            bodyFormData.append('email',userdata.username_value);
            bodyFormData.append('password',userdata.password_value);
            axios.post(loginApiUrl, bodyFormData)
              .then(function (response) {  
                dispatch(loginUser(response.data.data));  
                return resolve(response.data);
              })
              .catch(function (err) {   
                return reject(err.data);
              });  
          })
    }
}

export const setUsernameValue = (usernameValue) => ({
    type: SET_USERNAME_VALUE,
    usernameValue
})

export const setPasswordValue = (passwordValue) => ({
    type: SET_PASSWORD_VALUE,
    passwordValue
})

export const setMainPAgeIndex = (pageIndex) => ({
    type: SET_MAIN_PAGE_INDEX,
    pageIndex
})