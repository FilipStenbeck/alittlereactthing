require('isomorphic-fetch');

export const SET_HELLO_MESSAGE = 'SET_HELLO_MESSAGE';
export const SET_WORLD_MESSAGE = 'SET_WORLD_MESSAGE';
export const MENU_DATA_SUCCESS = 'MENU_DATA_SUCCESS';
export const LOADING_PEOPLE= 'LOADING_PEOPLE';
export const LOADING_PEOPLE_SUCCESS = 'LOADING_PEOPLE_SUCCESS';
export const LOADING_PEOPLE_ERROR = 'LOADING_PEOPLE_ERROR';


export function loadingPeople() {
	return {
		type: LOADING_PEOPLE,
	};
};

export function loadingPeopleSuccess(payload) {
	return {
		type: LOADING_PEOPLE_SUCCESS,
		payload: payload
	};
};

export function loadingPeopleError(error) {
	return {
		type: LOADING_PEOPLE_ERROR,
		payload: error
	};
};

export function fetchPeople() {
  return (dispatch, getState) => {
		fetch('https://tinylittleserver.herokuapp.com/people')
	    .then(function(response) {
	        if (response.status >= 400) {
	          dispatch(loadingPeopleError(response));
	        }
					 return response.json();
		}).then(function(items) {
		 dispatch(loadingPeopleSuccess(items));
 	});
		dispatch(loadingPeople());
  };
}


export function setHelloMsg(payload) {
	return {
		type: SET_HELLO_MESSAGE,
		payload: payload
	};
};

export function setWorldMsg(payload) {
	return {
		type: SET_WORLD_MESSAGE,
		payload: payload
	};
};

export function menuDataFetchSuccess(payload) {
	return {
		type: MENU_DATA_SUCCESS,
		payload: payload
	};
};

export function fetchMenuData() {
  return (dispatch, getState) => {
		fetch('https://api.svt.se/global-menu/header')
	    .then(function(response) {
	        if (response.status >= 400) {
	            //todo handle error
	        }
					 return response.json();
		}).then(function(items) {
		 dispatch(menuDataFetchSuccess(items));
 	});
  };
}
