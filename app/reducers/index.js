'use strict';
const createStore = require('redux').createStore;

import {
	SET_HELLO_MESSAGE,
	SET_WORLD_MESSAGE,
	MENU_DATA_SUCCESS,
	LOADING_PEOPLE,
	LOADING_PEOPLE_SUCCESS,
	LOADING_PEOPLE_ERROR
} from '../actions'

export function reducer(state = {}, action) {

  switch (action.type) {
  case SET_HELLO_MESSAGE:
    return Object.assign({}, state, { hello: action.payload });
	case SET_WORLD_MESSAGE:
    return Object.assign({}, state, { world: action.payload });
	case MENU_DATA_SUCCESS:
	  return Object.assign({}, state, { menu: action.payload });
		case LOADING_PEOPLE_SUCCESS:
		  return Object.assign({}, state, { people: action.payload });
  default:
    return state
  }
}
