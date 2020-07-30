// set up various action creators

import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

// comments
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

export const postComment = (id, dishId, author, comment, rating, date) => (dispatch) => {
  setTimeout(() => {
    dispatch(addComment(id, dishId, author, comment, rating, date));
  }, 2000);
};

export const addComment = (id, dishId, author, comment, rating, date) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    id: id,
    dishId: dishId, 
    author: author, 
    comment: comment,
    rating: rating, 
    date: date
  }
});

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

// favorites
export const fetchFavorites = () => (dispatch) => {
  dispatch(favoritesLoading());

  return fetch(baseUrl + 'favorites')
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
        .then(favorites => dispatch(addFavorites(favorites)))
        .catch(error => dispatch(favoritesFailed(error.message)))
};

export const favoritesLoading = () => ({
  type: ActionTypes.FAVORITES_LOADING
});

export const favoritesFailed = (errmess) => ({
  type: ActionTypes.FAVORITES_FAILED,
  payload: errmess
});

export const addFavorites = (favorites) => ({
  type: ActionTypes.ADD_FAVORITES,
  payload: favorites
});

export const postFavorite = (dishId) => (dispatch) => {
  // simulate server delay
  setTimeout(() => {
    dispatch(addFavorite(dishId));
  }, 2000);
};

export const addFavorite = (dishId) => ({
  type: ActionTypes.ADD_FAVORITE,
  payload: dishId
});

export const deleteFavorite = (dishId) => ({
  type: ActionTypes.DELETE_FAVORITE,
  payload: dishId
});