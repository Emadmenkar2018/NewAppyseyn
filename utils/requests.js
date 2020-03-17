import {updateApiUrl,
      fetchMealsUrl,
      fetchDataUrl,
      addBodyMassUrl,
      deleteUserMesaurmentUrl,
      addUserMesaurmentUrl,
      fetchusergoalsApi,
      fetchusercurrentsApi,
      fetchuserbookings,
      sendmessagetoadminApi,
      fetchmessegesApi,
      fetchproductsApi,
      fetchprogramApi,
      fetchUserBeforeAfterApi,
      _uploadfileurl, 
      _addMedicalurl,
      createVideoCallUrl,
      checkforAnswerCallUrl
    } from '../constants/apiUrls';
import axios from 'axios'; 

 
var axiosCrossDomain = axios;
let auth ="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM1OGM1YTFhYjQwNDljYmE5MmZiNjVlMjAzNzE0NmZkZDEwOTAwMjYwYTQzMjA3Y2JhZWI0MTU3MmI0MmM0Mzk2OWRkMTY4YmVhMWRkOTZhIn0.eyJhdWQiOiIxIiwianRpIjoiYzU4YzVhMWFiNDA0OWNiYTkyZmI2NWUyMDM3MTQ2ZmRkMTA5MDAyNjBhNDMyMDdjYmFlYjQxNTcyYjQyYzQzOTY5ZGQxNjhiZWExZGQ5NmEiLCJpYXQiOjE1ODM0OTYxODMsIm5iZiI6MTU4MzQ5NjE4MywiZXhwIjoxNjE1MDMyMTgyLCJzdWIiOiIyMyIsInNjb3BlcyI6W119.ZHyQN0b4nDO9_TdpcGx829IMk1Jq452OCUeDNd9KciGzkrO4smfkwB4KUIAPisdeaJu45MTi-4W8lOHl6bHbM783gusFyTI8gykhj8ftKu8Qwg42WZxY5lNq34g4OgFryuTQVRZlCiew0NzXK0CGJJeOuLJvteYz5A1VNBmqQeAF6cAsir-sSSjaXzxbuglVHsqMhxX9Z__nph9PuJ4wLJMtQe5lSA9VQAx6r5bIOX30LdGHtpo65yZIpocYBxyAj02RMAQPm405cvyiOZgZIcxpoE139e-g0q4ojoeX4eUipav5Nq2RgZvkMyNwnS_sSZ4rtHgt7jRaAoCdFgbqFfurF4M-18qk87Spdh4FeVQzNJa9BQRYNuNcw6FkESnz765Dcmjzcu-ZKVwZ02Qb8hNL-nWOZbA0GeskGNwwfT6cDBs9Nxfg59xTb1Vfjp2wbV6tADHb_vCCrRuiIafkIBBolpoAu8ghS23daRivCeRKsCV6b4YGcDWCRrUEajQtIu1sdiN5QwifEKb5_L_u6550z2ZlPw21FbWoZ3YH_7s8VTeqhL3WMVBXvPEOavY219djUz7nuu6q2UmyKMkY7B8SmuhLd4SlCFNNEJ-1QLSEa__fF-ekNo0feCdjdTM1JzYHZ-U2S8cgr1zg7-9Ee5eYMppQwXPUYa3EWGq7yQI"

axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${global.AccesToken}`

export const _updateProfileData =(bodyFormData )=>{
    return new Promise((resolve, reject) => { 
      axiosCrossDomain.post(updateApiUrl ,  bodyFormData)
        .then(function (response) {   
          return resolve(response.data);
        })
        .catch(function (error) {  
           console.log('Myerr',error.response.data); 
           return reject(error.response.data);
        });  
    })
  }

export const _fetchMealsData =()=>{
    return new Promise((resolve, reject) => { 
      var axiosCrossDomain = axios;
      axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
      axiosCrossDomain.post(fetchMealsUrl )
        .then(function (response) {   
          return resolve(response.data);
        })
        .catch(function (error) {  
           console.log('Myerr',error.response.data); 
           return reject(error.response.data);
        });  
    })
  }

  export const _fetchData =(data)=>{
    let bodyFormData = new FormData();  
    bodyFormData.append('content',data);
    return new Promise((resolve, reject) => { 
      var axiosCrossDomain = axios;
      axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
      axiosCrossDomain.post(fetchDataUrl,bodyFormData )
        .then(function (response) {   
          return resolve(response.data);
        })
        .catch(function (error) {  
           console.log('Myerr',error.response.data); 
           return reject(error.response.data);
        });  
    })
  }

  export const _addBodyMesurment =(data)=>{
    let bodyFormData = new FormData();  
    bodyFormData.append('content',data);
    return new Promise((resolve, reject) => { 
      var axiosCrossDomain = axios;
      axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
      axiosCrossDomain.post(addBodyMassUrl,bodyFormData )
        .then(function (response) {   
          return resolve(response.data);
        })
        .catch(function (error) {  
           console.log('Myerr',error.response.data); 
           return reject(error.response.data);
        });  
    })
  }

  export const _addRecord = (content,day,model_name) =>{
    let bodyFormData = new FormData();  
    bodyFormData.append('content',content);
    bodyFormData.append('date',day);
    bodyFormData.append('field',model_name);
    console.log('form',bodyFormData)
    return new Promise((resolve, reject) => { 
      var axiosCrossDomain = axios;
      axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
      axiosCrossDomain.post(addUserMesaurmentUrl,bodyFormData )
        .then(function (response) {   
          return resolve(response.data);
        })
        .catch(function (error) {  
           console.log('Myerr',error.response.data); 
           return reject(error.response.data);
        });  
    })
  }

  export const _deleteRecord = (day,model_name) =>{
    let bodyFormData = new FormData();  
    bodyFormData.append('date',day);
    bodyFormData.append('field',model_name);
    return new Promise((resolve, reject) => { 
      var axiosCrossDomain = axios;
      axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
      axiosCrossDomain.post(deleteUserMesaurmentUrl,bodyFormData )
        .then(function (response) {   
          return resolve(response.data);
        })
        .catch(function (error) {  
           console.log('Myerr',error.response.data); 
           return reject(error.response.data);
        });  
    })
  }

  
  export const _getUserGoalsApi = (day,model_name) =>{ 
    return new Promise((resolve, reject) => { 
      var axiosCrossDomain = axios;
      axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
      axiosCrossDomain.post(fetchusergoalsApi )
        .then(function (response) {   
          return resolve(response.data);
        })
        .catch(function (error) {  
           console.log('Myerr',error.response.data); 
           return reject(error.response.data);
        });  
    })
  }

  export const _getUserCurrentApi = (day,model_name) =>{ 
    return new Promise((resolve, reject) => { 
      var axiosCrossDomain = axios;
      axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
      axiosCrossDomain.post(fetchusercurrentsApi )
        .then(function (response) {   
          return resolve(response.data);
        })
        .catch(function (error) {  
           console.log('Myerr',error.response.data); 
           return reject(error.response.data);
        });  
    })
  }
  
  
  export const _fetchmyRandevuData = (day,model_name) =>{ 
    return new Promise((resolve, reject) => { 
      var axiosCrossDomain = axios;
      axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
      axiosCrossDomain.post(fetchuserbookings )
        .then(function (response) {   
          return resolve(response.data);
        })
        .catch(function (error) {  
           console.log('Myerr',error.response.data); 
           return reject(error.response.data);
        });  
    })
  }


  export const _sendNewMessage = (content) =>{ 
    return new Promise((resolve, reject) => { 
      let bodyFormData = new FormData();  
      bodyFormData.append('admin_id',2);
      bodyFormData.append('message',content); 
      var axiosCrossDomain = axios;
      axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
      axiosCrossDomain.post(sendmessagetoadminApi,bodyFormData )
        .then(function (response) {   
          return resolve(response.data);
        })
        .catch(function (error) {  
           console.log('Myerr',error.response.data); 
           return reject(error.response.data);
        });  
    })
  }

  export const _fetchLastConversations = () =>{ 
    return new Promise((resolve, reject) => { 
      let bodyFormData = new FormData();  
      bodyFormData.append('id',2);
      var axiosCrossDomain = axios;
      axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
      axiosCrossDomain.post(fetchmessegesApi,bodyFormData )
        .then(function (response) {    
          return resolve(response.data);
        })
        .catch(function (error) {  
           console.log('Myerr',error.response.data); 
           return reject(error.response.data);
        });  
    })
  }

  export const _fetchProductsFromApi = () =>{ 
    return new Promise((resolve, reject) => { 
      var axiosCrossDomain = axios;
      axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
      axiosCrossDomain.post(fetchproductsApi)
        .then(function (response) {    
          return resolve(response.data);
        })
        .catch(function (error) {  
           console.log('Myerr',error.response.data); 
           return reject(error.response.data);
        });  
    })
  }

  export const _fetchProgramData = () =>{ 
    return new Promise((resolve, reject) => { 
      var axiosCrossDomain = axios;
      axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
      axiosCrossDomain.post(fetchprogramApi)
        .then(function (response) {    
          return resolve(response.data);
        })
        .catch(function (error) {  
           console.log('Myerr',error.response.data); 
           return reject(error.response.data);
        });  
    })
  }


  export const _getUserBeforeAfterApi = () =>{ 
    return new Promise((resolve, reject) => { 
      var axiosCrossDomain = axios;
      axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
      axiosCrossDomain.post(fetchUserBeforeAfterApi)
        .then(function (response) {    
          return resolve(response.data);
        })
        .catch(function (error) {  
           console.log('Myerr',error.response.data); 
           return reject(error.response.data);
        });  
    })
  }
  export const _uploadFileApi = (bodyFormData) =>{ 
    return new Promise((resolve, reject) => { 
      var axiosCrossDomain = axios;
      axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
      axiosCrossDomain.post(_uploadfileurl,bodyFormData)
        .then(function (response) {    
          return resolve(response.data);
        })
        .catch(function (error) {  
           console.log('Myerr',error.response.data); 
           return reject(error.response.data);
        });  
    })
  }

  export const _addMedicalApi = (bodyFormData) =>{ 
    return new Promise((resolve, reject) => { 
      var axiosCrossDomain = axios;
      axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
      axiosCrossDomain.post(_addMedicalurl,bodyFormData)
        .then(function (response) {    
          return resolve(response.data);
        })
        .catch(function (error) {  
           console.log('Myerr',error.response.data); 
           return reject(error.response.data);
        });  
    })
  }
  
  export const _getHistoryDataapi = (bodyFormData) =>{ 
    return new Promise((resolve, reject) => { 
      var axiosCrossDomain = axios;
      axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
      axiosCrossDomain.post(_addMedicalurl,bodyFormData)
        .then(function (response) {    
          return resolve(response.data);
        })
        .catch(function (error) {  
           console.log('Myerr',error.response.data); 
           return reject(error.response.data);
        });  
    })
  }
  // _getHistoryFilesapi
  

  export const _startNewVideoCallApi = (bodyFormData) =>{ 
    return new Promise((resolve, reject) => { 
      console.log('fdsfsfwtf')
      var bodyFormData = new FormData();  
      bodyFormData.append('admin_id',2);
      var axiosCrossDomain = axios;
      axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
      axiosCrossDomain.post(createVideoCallUrl,bodyFormData)
        .then(function (response) {    
          console.log('fdsfsf',response)
          return resolve(response.data);
        })
        .catch(function (error) {  
           console.log('Myerr',error.response.data); 
           return reject(error.response.data);
        });  
    })
  }

  export const _checkforAnswerCall = (id) =>{ 
    return new Promise((resolve, reject) => { 
      let bodyFormData = new FormData();  
      bodyFormData.append('id',id);
      var axiosCrossDomain = axios;
      axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
      axiosCrossDomain.post(checkforAnswerCallUrl,bodyFormData)
        .then(function (response) {    
          return resolve(response.data);
        })
        .catch(function (error) {  
           console.log('Myerr',error.response.data); 
           return reject(error.response.data);
        });  
    })
  }
  
  

//   export const _fetchVideoCallinfo = () =>{ 
//     var AccessToken = require('twilio').jwt.AccessToken;
//     var VideoGrant = AccessToken.VideoGrant;
  
//     // Substitute your Twilio AccountSid and ApiKey details
//     var ACCOUNT_SID = 'accountSid';
//     var API_KEY_SID = 'apiKeySid';
//     var API_KEY_SECRET = 'apiKeySecret';
  
//     // Create an Access Token
//     var accessToken = new AccessToken(
//       ACCOUNT_SID,
//       API_KEY_SID,
//       API_KEY_SECRET
//     );
  
//     // Set the Identity of this token
//     accessToken.identity = 'example-user';
  
//     // Grant access to Video
//     var grant = new VideoGrant();
//     grant.room = 'cool room';
//     accessToken.addGrant(grant);
  
//     // Serialize the token as a JWT
//     var jwt = accessToken.toJwt();
//     console.log(jwt);




//     const accountSid = 'SK3fc6f1ef612af5072369b5c9532d1833';
//     const authToken = '4805574ece91244edb88ae99e94fc7b0';
//     const client = require('twilio')(accountSid, authToken);

// client.video.rooms
//             .create({
//                recordParticipantsOnConnect: true,
//                statusCallback: 'http://example.org',
//                type: 'group',
//                uniqueName: 'DailyStandup'
//              })
//             .then(room => console.log(room.sid));
//   }