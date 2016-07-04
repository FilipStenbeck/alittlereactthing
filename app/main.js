import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import { reducer } from './reducer';
import Container from './container';

//Setup the store and initial state of the app
let store = createStore(reducer)
store.dispatch({ type: 'SET_HELLO_MESSAGE', payload: "Hej" });
store.dispatch({ type: 'SET_WORLD_MESSAGE', payload: "världen" });

//Save store on windows for easy access
window.store = store;

render(
	<Provider store={store}>
    <Container />
  </Provider>,
	document.getElementById('app')
);
