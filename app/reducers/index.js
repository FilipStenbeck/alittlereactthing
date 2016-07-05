'use strict';
const createStore = require('redux').createStore;

import {
	SET_HELLO_MESSAGE,
	SET_WORLD_MESSAGE
} from '../actions'

export function reducer(state = {}, action) {

  switch (action.type) {
  case SET_HELLO_MESSAGE:
    return Object.assign({}, state, { hello: action.payload });
	case SET_WORLD_MESSAGE:
    return Object.assign({}, state, { world: action.payload });
  default:
    return state
  }
}
