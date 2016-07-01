import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { reducer } from './reducer';
import Container from './Container.jsx';

//Setup the store and initial values
window.store = createStore(reducer);
store.dispatch({ type: 'SET_HELLO_MESSAGE', payload: "hello" });
store.dispatch({ type: 'SET_WORLD_MESSAGE', payload: "world" });

ReactDOM.render(<Container/>, document.getElementById('container'));
