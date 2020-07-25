// reducer for promotions
import * as ActionTypes from './ActionTypes';

export const leaders = (state = {
  isLoading: true,
  errMess: null,
  promotions: []
}, action) => {
  
  switch(action.type) {
    case ActionTypes.ADD_PROMOTIONS:
      return {...state, isLoading:false, errMess: null, promotions: action.payload};

    case ActionTypes.PROMOTIONS_LOADING:
      return {...state, isLoading:true, errMess: null, promotions: []};

    case ActionTypes.PROMOTIONS_FAILED:
      return {...state, isLoading:false, errMess: action.payload, promotions: []};
       
    default:
      return state;
  }
}