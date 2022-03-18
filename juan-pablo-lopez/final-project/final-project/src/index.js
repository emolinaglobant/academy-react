import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/Products.css';
import './css/Cart.css';
import './css/Summary.css';
import './css/Modal.css';
import './css/Filter.css';
import './css/FooterPage.css';
import './css/Login.css';
import './css/PageNotFound.css';
import './css/Card.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
