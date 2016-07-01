'use strict';
const createStore = require('redux').createStore;

export function reducer(state, action) {
	if (!state) {
		 state = {};
	}
  switch (action.type) {
  case 'SET_HELLO_MESSAGE':
    return Object.assign(state, {hello: action.payload});
	case 'SET_WORLD_MESSAGE':
    return Object.assign(state, {world: action.payload});
  default:
    return state
  }
}
