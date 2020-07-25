import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

// set up various action creators
export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + 'comments')
        .then(response => {
          if (response.ok) {
            return response;
          }
          else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
        error => {
          var errMess = new Error(error.message)
          throw errMess;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)))
};

export const commentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
})

// dishes
export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading());

  return fetch(baseUrl + 'dishes')
        .then(response => {
          if (response.ok) {
            return response;
          }
          else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
        error => {
          var errMess = new Error(error.message)
          throw errMess;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)))
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
});

// promotions
export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading());

  return fetch(baseUrl + 'promotions')
        .then(response => {
          if (response.ok) {
            return response;
          }
          else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
        error => {
          var errMess = new Error(error.message)
          throw errMess;
        })
        .then(response => response.json())
        .then(promotions => dispatch(addPromos(promotions)))
        .catch(error => dispatch(promosFailed(error.message)))
};

export const promosLoading = () => ({
  type: ActionTypes.PROMOTIONS_LOADING
});

export const promosFailed = (errmess) => ({
  type: ActionTypes.PROMOTIONS_FAILED,
  payload: errmess
});

export const addPromos = (promotions) => ({
  type: ActionTypes.ADD_PROMOTIONS,
  payload: promotions
});

// leaders
export const fetchLeaders = () => (dispatch) => {
  dispatch(leadersLoading());

  return fetch(baseUrl + 'leaders')
        .then(response => {
          if (response.ok) {
            return response;
          }
          else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
        error => {
          var errMess = new Error(error.message)
          throw errMess;
        })
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)))
};

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errmess
});

export const addLeaders = (leaders) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders
});