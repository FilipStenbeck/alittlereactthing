import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import MessageContainer from './containers/messageContainer';
import About from './components/about/about.jsx';

import { reducer } from './reducers';
import {
	setHelloMsg,
	setWorldMsg
} from './actions'

//Setup the store and initial state of the app
let store = createStore(reducer)
store.dispatch(setHelloMsg('Hallå'));
store.dispatch(setWorldMsg('världen!'));

//Save store on windows for easy access from the dev-tool  console
window.store = store;


render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={MessageContainer}/>
			<Route path="/about/:name" component={About}/>
    </Router>
  </Provider>,
	document.getElementById('app')
);
