import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './redux/reducers/Reducers'
const store = createStore(reducers);
window.store=store;

ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>
, document.getElementById('root')
);
