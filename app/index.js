import React from 'react';
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import PeopleContainer from './containers/peopleContainer';


import { reducer } from './reducers';
import {
	fetchPeople
} from './actions'

//Setup the store and initial state of the app
let store = createStore(reducer, applyMiddleware(thunk))
store.dispatch(fetchPeople());

//Save store on windows for easy access from the dev-tool console
window.store = store;

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={PeopleContainer}/>
			<Route path="/people" component={PeopleContainer}/>
			<Route path="/people/:filter" component={PeopleContainer}/>
    </Router>
  </Provider>,
	document.getElementById('app')
);
