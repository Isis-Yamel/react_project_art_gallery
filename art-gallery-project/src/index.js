import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import fetchReducer from './store/reducers/fetchReducer';
import factsReducer from './store/reducers/factsReducer';

const rootReducer = combineReducers({
  fetchData: fetchReducer,
  facts: factsReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
