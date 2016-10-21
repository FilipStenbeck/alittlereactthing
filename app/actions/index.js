require('isomorphic-fetch');

export const SET_HELLO_MESSAGE = 'SET_HELLO_MESSAGE';
export const SET_WORLD_MESSAGE = 'SET_WORLD_MESSAGE';
export const MENU_DATA_SUCCESS = 'MENU_DATA_SUCCESS';



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
