import App from './containers/App';
import React from 'react';
import ReactDOM from 'react-dom';

import factsReducer from './store/reducers/facts-reducer';
import favoriteReducer from './store/reducers/favorite-reducer';
import fetchReducer from './store/reducers/fetch-reducer';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import './index.css';

const rootReducer = combineReducers({
  facts: factsReducer,
  favorite: favoriteReducer,
  fetchData: fetchReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);