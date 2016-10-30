import React from 'react';
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import MessageContainer from './containers/messageContainer';
import PeopleContainer from './containers/peopleContainer';

import About from './components/about/about.jsx';

import { reducer } from './reducers';
import {
	setHelloMsg,
	setWorldMsg,
	fetchMenuData,
	fetchPeople
} from './actions'

//Setup the store and initial state of the app
let store = createStore(reducer, applyMiddleware(thunk))
store.dispatch(setHelloMsg('Hallå'));
store.dispatch(setWorldMsg('världen!'));
store.dispatch(fetchMenuData());
store.dispatch(fetchPeople());


//Save store on windows for easy access from the dev-tool console
window.store = store;

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={PeopleContainer}/>
			<Route path="/people" component={PeopleContainer}/>
			<Route path="/people/:filter" component={PeopleContainer}/>
			<Route path="/messages" component={MessageContainer}/>
			<Route path="/about/:name" component={About}/>
    </Router>
  </Provider>,
	document.getElementById('app')
);
