import {SET_BREAKFAST,SET_LUNCH, SET_DINNER,SET_USER_MEALS,SET_APERATIF,SET_SLEEP,SET_EXERCISES} from '../actionTypes'
import axios from 'axios'; 
import {addBreakfastUrl,addLunchUrl,addDinnerUrl,addSleepUrl,addApperatifUrl,addExerciseUrl} from '../../constants/apiUrls'; 


let auth ="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM3N2RhNDI4NmY1YTZkZTQ4ZGViYmMxMjAyODgyNmJjZTUyZDliODk1N2Y3OWMzMTg3YmU0MTNhZDViZDE2ZDdhMTg5ZTgwY2U4MzVlNjgyIn0.eyJhdWQiOiIxIiwianRpIjoiMzc3ZGE0Mjg2ZjVhNmRlNDhkZWJiYzEyMDI4ODI2YmNlNTJkOWI4OTU3Zjc5YzMxODdiZTQxM2FkNWJkMTZkN2ExODllODBjZTgzNWU2ODIiLCJpYXQiOjE1ODMyNTE5MTYsIm5iZiI6MTU4MzI1MTkxNiwiZXhwIjoxNjE0Nzg3OTE2LCJzdWIiOiIyMyIsInNjb3BlcyI6W119.cVQpzU8eIRmksV4E-ayIRCSXOjhBCTU90z8ZhzTIu6XA7NzoB6FSOrWmM-rzQEUI16sI3cRFCIApaEN0o1UhuEUip9jy2ZhzprfouUH6ezQ_cZchW7E95G91EmyZBbA50ZPKiieLtW_0z6ZcI9UGY6r_ZUoFBJDvxS2eXDeY12aUv1DyX5PDVm6A9V7MvybiGUeC0C7JJSaqyww8SKbWZd8FGRPmd1EkRDsqNGivj96ig2kPsv21ncgLZZgDRXe_lO1hgbRHn4BsQoEQjhPO-JMHOuIgPjNzV6OgmNKdogft_flHQGvTglmBpMXu42Wa0YeuXzPtgA9CNWBnhsnG23Yu25XPbPk_1OZGUCMnZ01am_0DY8GAWcSNxzeKZVSafijG1SO62Shtj6dqQRq7RgeUNJd5hT6Zt8VXHrGqPQPGopj6RnDx5GgqUvtfUjwU_Rg6EMUJmXiPtFdBxi8zN-fB9mC0wfH6Pr0_apZB7lj52l6mPL5sW9_ZwDj7YlEq3A29TvTp8paBiX3dso2SMdnS5vTFo2M5L714w4p0f765yFFRwy8QphA5McwZyAAQORQ6GGqj3LYD57u0tBj2pNb9sISGmHpXSlgxJdtgX74FPWSN_FJiahgz51XPWGxzktQZgSPFDxBq7afFweVm7Q2US1KWuVGCfRpolApSQUA"


export function setUserMeals(user_meals){
   
    return {
        type: SET_USER_MEALS,
        user_meals
    }
}

export function setBreakfast(date,content,addedObj){
  //  console.log('1',date,content)
  return {
      type: SET_BREAKFAST,
      date,
      content,
      addedObj

  }
}

export function setLunch(date,content,addedObj){
   console.log('3',date,content)
  return {
      type: SET_LUNCH,
      date,
      content,
      addedObj
  }
}

export function setDinner(date,content,addedObj){
  //  console.log('1',date,content)
  return {
      type: SET_DINNER,
      date,
      content,
      addedObj
  }
}

export function setExercise(date,content,addedObj){
  //  console.log('1',date,content)
  return {
      type: SET_EXERCISES,
      date,
      content,
      addedObj
  }
}

export function setAperatif(date,content,addedObj){
  //  console.log('1',date,content)
  return {
      type: SET_APERATIF,
      date,
      content,
      addedObj
  }
}

export function setSleep(date,content,addedObj){
  //  console.log('1',date,content)
  return {
      type: SET_SLEEP,
      date,
      content,
      addedObj
  }
}


export function setBreakfastContent(date,content){  
        return dispatch => { 
          // return new Promise((resolve, reject) => {
              
                let axiosCrossDomain = axios;
                let bodyFormData = new FormData();  
                bodyFormData.append('content',content);
                bodyFormData.append('date',date);
                // console.log('bodyFormData',bodyFormData)
                axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
                axiosCrossDomain.post(addBreakfastUrl, bodyFormData ) 
                  .then(function (response) {
                    // console.log('BreakFast Updated', response.data)
                    dispatch(setBreakfast(date,content,response.data.data));
                    // return resolve(response.data);
                  })
                  .catch(function (err) {  
                    console.log(err)
                    // return reject(err.data);
                  });
              // })
        } 
}

export function setLunchContent(date,content){  
  return dispatch => { 
    // return new Promise((resolve, reject) => {
        
          let axiosCrossDomain = axios;
          let bodyFormData = new FormData();  
          bodyFormData.append('content',content);
          bodyFormData.append('date',date);
          console.log('bodyFormData',bodyFormData)
          axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
          axiosCrossDomain.post(addLunchUrl, bodyFormData ) 
            .then(function (response) { 
              dispatch(setLunch(date,content,response.data.data));
              // return resolve(response.data);
            })
            .catch(function (err) {  
              console.log(err)
              // return reject(err.data);
            });
        // })
  } 
}

export function setDinnerContent(date,content){  
  return dispatch => { 
    // return new Promise((resolve, reject) => {
        
          let axiosCrossDomain = axios;
          let bodyFormData = new FormData();  
          bodyFormData.append('content',content);
          bodyFormData.append('date',date);
          // console.log('bodyFormData',bodyFormData)
          axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
          axiosCrossDomain.post(addDinnerUrl, bodyFormData ) 
            .then(function (response) {
              // console.log('BreakFast Updated', response.data)
              dispatch(setDinner(date,content,response.data.data));
              // return resolve(response.data);
            })
            .catch(function (err) {  
              console.log(err)
              // return reject(err.data);
            });
        // })
  } 
}

export function setExerciseContent(date,content){  
  return dispatch => { 
    // return new Promise((resolve, reject) => {
        
          let axiosCrossDomain = axios;
          let bodyFormData = new FormData();  
          bodyFormData.append('content',content);
          bodyFormData.append('date',date);
          // console.log('bodyFormData',bodyFormData)
          axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
          axiosCrossDomain.post(addExerciseUrl, bodyFormData ) 
            .then(function (response) {
              // console.log('BreakFast Updated', response.data)
              dispatch(setExercise(date,content,response.data.data));
              // return resolve(response.data);
            })
            .catch(function (err) {  
              console.log(err)
              // return reject(err.data);
            });
        // })
  } 
}

export function setAperatifContent(date,content){  
  return dispatch => { 
    // return new Promise((resolve, reject) => {
        
          let axiosCrossDomain = axios;
          let bodyFormData = new FormData();  
          bodyFormData.append('content',content);
          bodyFormData.append('date',date);
          // console.log('bodyFormData',bodyFormData)
          axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
          axiosCrossDomain.post(addApperatifUrl, bodyFormData ) 
            .then(function (response) { 
              dispatch(setAperatif(date,content,response.data.data));
              // return resolve(response.data);
            })
            .catch(function (err) {  
              console.log(err)
              // return reject(err.data);
            }); 
  } 
}

export function setSleepContent(date,content){  
  return dispatch => { 
    // return new Promise((resolve, reject) => {
        
          let axiosCrossDomain = axios;
          let bodyFormData = new FormData();  
          bodyFormData.append('content',content);
          bodyFormData.append('date',date); 
          axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
          axiosCrossDomain.post(addSleepUrl, bodyFormData ) 
            .then(function (response) { 
              dispatch(setSleep(date,content,response.data.data));
              // return resolve(response.data);
            })
            .catch(function (err) {  
              console.log(err)
              // return reject(err.data);
            });
        // })
  } 
}

