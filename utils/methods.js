import {registerApiUrl,updateApiUrl} from '../constants/apiUrls';
import axios from 'axios'; 
import React from 'react';
import { StyleSheet,   View ,Text} from 'react-native'; 
import moment from 'moment';
import {_getdayofWeek } from '../constants/arrays'
import 'moment/locale/tr'
// require('moment/locale/nl.js');


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


export const getToday =() =>{  
  let daysArray = []
  for (let i=0 ; i < 7 ;i++){
      daysArray.push(moment().locale("tr").subtract(i, 'days').format('ddd') ) 
  } 
  return daysArray.sort()
}

export const getTodayNumbers =() =>{  
  let daysArray = []
  for (let i=0 ; i < 7 ;i++){
      daysArray.push(moment().subtract(i, 'days').format('YYYY-MM-DD') ) 
  } 
  return daysArray.sort()
}

export const getTodayNumbers2 =() =>{  
  let daysArray = []
  for (let i=0 ; i < 7 ;i++){
      daysArray.push(moment().subtract(i, 'days').format('YYYY-MM-DD') ) 
  } 
  return daysArray.sort()
}
 

export const TodayIndicatorList =() =>{  
  let daysArray = [] 
  for (let i=0 ; i < 7 ;i++){
      var obj = {
        day: moment().locale("tr").subtract(i, 'days').format('ddd'),
        height : getRandomArbitrary(40,90),
        index : 6-i 
      };
      daysArray.push(obj) 
  } 
  
  return daysArray
}
export const TodayIndicatorList2 =() =>{  
  let daysArray = [] 
  for (let i=0 ; i < 7 ;i++){
      var obj = {
        day: moment().locale("tr").add(i, 'days').format('ddd'),
        height : getRandomArbitrary(40,90),
        index : i
      };
      daysArray.push(obj) 
  } 
  
  return daysArray
}
 

export const ValidateEmail =(inputText )=>{
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    if (re.test(inputText))
    {  
      return true;

    }
    else
    {
      return false;
    }
}

export const CreateAccount =(bodyFormData )=>{
  return new Promise((resolve, reject) => { 
    axios.post(registerApiUrl, bodyFormData)
      .then(function (response) {  
        // dispatch(loginUser(response.data.data));  
        return resolve(response.data);
      })
      .catch(function (error) {  
         console.log('Myerr',error.response.data); 
         return reject(error.response.data);
      });  
  })
}


export function sortKeys(obj_1) { 
  var key = Object.keys(obj_1) 
  .sort(function order(key1, key2) { 
      if (key1 < key2) return -1; 
      else if (key1 > key2) return +1; 
      else return 0; 
  });  
    
  // Taking the object in 'temp' object 
  // and deleting the original object. 
  var temp = {}; 
    
  for (var i = 0; i < key.length; i++) { 
      temp[key[i]] = obj_1[key[i]]; 
      delete obj_1[key[i]]; 
  }  

  // Copying the object from 'temp' to  
  // 'original object'. 
  for (var i = 0; i < key.length; i++) { 
      obj_1[key[i]] = temp[key[i]]; 
  }  
  return obj_1; 
} 

export const sortList = (newlist) =>{
  newlist = newlist.sort(function(a,b){ 
      return new Date(b.date) - new Date(a.date);
    });

    return newlist;
  // setList(newlist) 
}


const addSubtractDate = require("add-subtract-date");

export const _newgetDates=()=>{ 
    
  let date = new Date();   
  let arr =[];
  for(let i=-1; i<=30; i++) { 
    
      // let mon = date.getMonth()+1
      let mon =('0' + (date.getMonth()+1)).slice(-2)
      let day  = ('0' + date.getDate()).slice(-2) 
      arr.push( day.toString() + "-"+ mon.toString());   
      date = addSubtractDate.add(date, 1, "day")
  }
    return arr
} 

export const _getDates=()=>{ 
    
  let date = new Date(); 
  let actualdate = addSubtractDate.subtract(date, 2, "day");  
  let arr =[];
  for(let i=-1; i<=32; i++) { 
    
      // let mon = date.getMonth()+1
      let mon =('0' + (actualdate.getMonth()+1)).slice(-2)
      let day  = ('0' + actualdate.getDate()).slice(-2) 
      arr.push( day.toString() + "-"+ mon.toString());   
      actualdate = addSubtractDate.add(actualdate, 1, "day")
  }
    return arr
} 

export const _getDates2=()=>{ 
    
  let date = new Date(); 
  let actualdate = addSubtractDate.subtract(date, 2, "day");  
  let arr =[];
  for(let i=-1; i<=32; i++) { 
    
      // let mon = date.getMonth()+1
      let mon =('0' + (actualdate.getMonth()+1)).slice(-2)
      let day  = ('0' + actualdate.getDate()).slice(-2) 
      arr.push(  mon.toString() + "-"+day.toString() );   
      actualdate = addSubtractDate.add(actualdate, 1, "day")
  }
    return arr
} 

export function _extractDays(myRandevus) { 
  let days_numbers = [];
  for (let i=0; i< myRandevus.length; i++) { 
    let x = myRandevus[i].desired_date.split(" ")[0]
    x = x.split("-")[2] + "-" + x.split("-")[1]
    days_numbers.push(x);
  }  
  return days_numbers;
}


export function _extractDays2(myRandevus) { 
  let days_numbers = [];
  for (let i=0; i< myRandevus.length; i++) { 
    let x = myRandevus[i].desired_date.split(" ")[0]
    x = x.split("-")[1]  + "-" + x.split("-")[2]
    days_numbers.push(x);
  }  
  return days_numbers;
}


// export const _getAccessToken = ()=> { 
//   var AccessToken = require('twilio').jwt.AccessToken;
//   var VideoGrant = AccessToken.VideoGrant;

//   // Substitute your Twilio AccountSid and ApiKey details
//   var ACCOUNT_SID = 'AC98b474449299b2a2a19b8cb68ea79d86';
//   var API_KEY_SID = 'SK3fc6f1ef612af5072369b5c9532d1833';
//   var API_KEY_SECRET = 'apiKeySecret';

//   // Create an Access Token
//   var accessToken = new AccessToken(
//     ACCOUNT_SID,
//     API_KEY_SID,
//     API_KEY_SECRET
//   );

//   // Set the Identity of this token
//   accessToken.identity = 'example-user';

//   // Grant access to Video
//   var grant = new VideoGrant();
//   grant.room = 'cool room';
//   accessToken.addGrant(grant);

//   // Serialize the token as a JWT
//   var jwt = accessToken.toJwt();
//   console.log(jwt);
// }