import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { reducer } from './reducer';
import Container from './Container.jsx';

window.store = createStore(reducer);

store.dispatch({ type: 'SET_HELLO_MESSAGE', payload: "hello" });
store.dispatch({ type: 'SET_WORLD_MESSAGE', payload: "world" });

ReactDOM.render(<Container hello={store.getState().hello} world={store.getState().world}/>, document.getElementById('container'));
