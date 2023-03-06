import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { store } from './utilities/redux/store';
import { App } from './Components/App/App';
import { configureStore } from '@reduxjs/toolkit'
import books from '../src/utilities/redux/reducers'
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
const store = configureStore({ reducer: books })

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals