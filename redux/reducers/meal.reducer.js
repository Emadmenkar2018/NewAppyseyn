import {SET_USER_MEALS ,SET_BREAKFAST,SET_LUNCH, SET_DINNER,SET_APERATIF,SET_SLEEP,SET_EXERCISES} from '../actionTypes';

const user_meals = (state = {}, action) => {
    switch (action.type) {
      case SET_USER_MEALS: { 
        return {
            ...state,
            ...action.user_meals
        }
      }
      case SET_BREAKFAST:  
        if(state[action.date].user_breakfasts[0]){
          return {
            ...state,
            [action.date]: {
              ...state[action.date],
              user_breakfasts: [
                {
                  ...state[action.date].user_breakfasts[0].content,
                  content: action.content
                }
              ]
            } 
          }    
        }
        else {
          return {
          ...state,
          [action.date]: {
            ...state[action.date],
            user_breakfasts: [
              {
                ...action.addedObj
              }
            ]
          } 
        }   
      }
      case SET_LUNCH:  
        if(state[action.date].user_lunches[0]){
            return {
              ...state,
              [action.date]: {
                ...state[action.date],
                user_lunches: [
                  {
                    ...state[action.date].user_lunches[0].content,
                    content: action.content
                  }
                ]
              } 
            }   
          }
          else{
            return {
              ...state,
              [action.date]: {
                ...state[action.date],
                user_lunches: [
                  {
                    ...action.addedObj
                  }
                ]
              } 
            }   
          }
          
        case SET_DINNER:  
          if(state[action.date].user_dinners[0]){
            return {
              ...state,
              [action.date]: {
                ...state[action.date],
                user_dinners: [
                  {
                    ...state[action.date].user_dinners[0].content,
                    content: action.content
                  }
                ]
              } 
            }   
          }
          else{
            return {
              ...state,
              [action.date]: {
                ...state[action.date],
                user_dinners: [
                  {
                    ...action.addedObj
                  }
                ]
              } 
            }  
          } 
        case SET_APERATIF:  
          if(state[action.date].user_apperatives[0]){
            return {
              ...state,
              [action.date]: {
                ...state[action.date],
                user_apperatives: [
                  {
                    ...state[action.date].user_apperatives[0].content,
                    content: action.content
                  }
                ]
              } 
            }   
          }
          else{
            return {
              ...state,
              [action.date]: {
                ...state[action.date],
                user_apperatives: [
                  {
                    ...action.addedObj
                  }
                ]
              } 
            }  
          }
        
        case SET_SLEEP:
          if(state[action.date].user_sleeps[0]){
            return {
              ...state,
              [action.date]: {
                ...state[action.date],
                user_sleeps: [
                  {
                    ...state[action.date].user_sleeps[0].content,
                    content: action.content
                  }
                ]
              } 
            }  
          }
          else{
            return {
              ...state,
              [action.date]: {
                ...state[action.date],
                user_sleeps: [
                  {
                    ...action.addedObj
                  }
                ]
              } 
            }  
          }  
       
        case SET_EXERCISES: 
          if(state[action.date].user_exercises[0]){ 
            return {
              ...state,
              [action.date]: {
                ...state[action.date],
                user_exercises: [
                  {
                    ...state[action.date].user_exercises[0].content,
                    content: action.content
                  }
                ]
              } 
            } 
          }
          else{
            return {
              ...state,
              [action.date]: {
                ...state[action.date],
                user_exercises: [
                  {
                    ...action.addedObj
                  }
                ]
              } 
            } 
          }
        
        
      default: 
        return state;
    }
   
  };
  
  export default user_meals;