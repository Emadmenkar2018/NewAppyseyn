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
      sendDeclinecomingCallsFromUSerUrl,
      fetchincomingCallsFromAdminUrl,
      sendanswercomingCallsFromUserUrl
    } from '../constants/apiUrls';
import axios from 'axios'; 

 
var axiosCrossDomain = axios;
let auth ="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjgyOWRiZjNmMDQ4NzAzOWExYzMwMWZjMDg5YzBkMzgzYWQ3ZjgwNjI0YTAxMTg4Njk0NDIzYjdkMDhkZDJjZDI5MzUzZTBhNmQ2NjRkODVjIn0.eyJhdWQiOiIxIiwianRpIjoiODI5ZGJmM2YwNDg3MDM5YTFjMzAxZmMwODljMGQzODNhZDdmODA2MjRhMDExODg2OTQ0MjNiN2QwOGRkMmNkMjkzNTNlMGE2ZDY2NGQ4NWMiLCJpYXQiOjE1ODQ3OTg4MDAsIm5iZiI6MTU4NDc5ODgwMCwiZXhwIjoxNjE2MzM0ODAwLCJzdWIiOiIyMyIsInNjb3BlcyI6W119.ZpyHo1ptSijkw1ICjj8nciBqev9_pPGvwpvIbZjEV-QOij7oHY8PKMzF0JY4NjPSZdwuRlD0j3hWNC77SuwA4V0cxjHvbkCd4B6n9vHC72bRwjHyUf3mR7FBNMjJ0Z7hwcImzjocrp4I_MPIi6Lh4VfwjD2xGDi9GH7yx5z1_fBvlQCZ-XWZGolpkOn5KW9O7mDZoVepL7VOP33qBr7e0S8QmARRARiPEHw6BLtnRurXKxbThgH3XfI_i2wIKr5f7QTs3FRxi0himtbx0JHilrac1YiTQWDmfYbvK4f4pNCpizvs5oJUCnwjl27iHDdlDkqXwadwKBUOqxYp7C_InaN0aRLug3PWtRVKKofbCwjODdjNDlag1hfzDv245xhnmMhAPewjKPLfJ_VN6HkWoqEdUxYbej4vAH5YeGaWMC7mcMm3_zi7QVlM3onUQYozuyXXdklEwsbp0XCGbrreyLfCIwlAT_B2kG6YMmH3wqYOQC9LZiFseHLHdNgYAPyqN07ediPWHfzR_aXod9dcZVmj98O5HObH10-PgJdx-G4NS865azwfPAxEfHSeL7ZYH1JEprPgGCIxCmiOh9SPZu8Y-9w5qr6imrll0NKnsq4z77OiOF6ZFEheIKMVNWpIB4_6mg9Cf4YcQxaj9jtcZICmOLDzW3Xre9w22MPdg4Y"

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
   

  export const fetchincomingCallsFromAdminApi = () =>{ 
    return new Promise((resolve, reject) => { 
      let bodyFormData = new FormData();   
      bodyFormData.append('from_admin',2);
      var axiosCrossDomain = axios;
      axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
      axiosCrossDomain.post(fetchincomingCallsFromAdminUrl,bodyFormData )
        .then(function (response) {    
          return resolve(response.data);
        })
        .catch(function (error) {  
           console.log('Myerr',error.response); 
           return reject(error.response);
        });  
    })
  } 

  export const _sendAnswerVideoCallApiFromUser = (id) =>{ 
    return new Promise((resolve, reject) => { 
      let bodyFormData = new FormData();   
      bodyFormData.append('call_id',id);
      var axiosCrossDomain = axios;
      axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
      axiosCrossDomain.post(sendanswercomingCallsFromUserUrl,bodyFormData )
        .then(function (response) {    
          return resolve(response.data);
        })
        .catch(function (error) {  
           console.log('Myerr',error.response); 
           return reject(error.response);
        });  
    })
  } 

  export const _sendDeclineVideoCallApiFromUser = (id) =>{ 
    return new Promise((resolve, reject) => { 
      let bodyFormData = new FormData();   
      bodyFormData.append('call_id',id);
      var axiosCrossDomain = axios;
      axiosCrossDomain.defaults.headers.common['Authorization'] = `Bearer ${auth}`
      axiosCrossDomain.post(sendDeclinecomingCallsFromUSerUrl,bodyFormData )
        .then(function (response) {    
          return resolve(response.data);
        })
        .catch(function (error) {  
           console.log('Myerr',error.response); 
           return reject(error.response);
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