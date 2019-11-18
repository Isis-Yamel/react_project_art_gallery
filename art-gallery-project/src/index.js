import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import './index.css';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import fetchReducer from './store/reducers/fetchReducer';
import factsReducer from './store/reducers/factsReducer';

const rootReducer = combineReducers({
  fetchData: fetchReducer,
  facts: factsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);