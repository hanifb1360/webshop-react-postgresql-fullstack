import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import RoutesComponent from './routes'; // Use RoutesComponent instead of App
import { Provider } from 'react-redux';
import { store } from './app/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RoutesComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
