import * as ActionTypes from './ActionTypes';

export const favorites = (state = {
  errMess: null,
  favorites: []
}, action) => {
  switch(action.type) {
    case ActionTypes.ADD_FAVORITES:
      return {...state, errMess: null, favorites: action.payload};

    case ActionTypes.FAVORITES_LOADING:
      return {...state, errMess: null, favorites: []};

    case ActionTypes.FAVORITES_FAILED:
      return {...state, errMess: action.payload, favorites: []};

    case ActionTypes.ADD_FAVORITE:
      if (state.favorites.some(element => element === action.payload))
        return state;
      else
        return {...state, errMess: null, favorites: state.favorites.concat(action.payload)};

    case ActionTypes.DELETE_FAVORITE:
      return {...state, errMess: null, favorites: state.favorites.filter((favorite) => favorite != action.payload)};

    default:
      return state
  }
}