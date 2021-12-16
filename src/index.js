import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCqTTtsKRJvWEIPl0fMjnVpZJ9OQt9CJu4",
  authDomain: "komorebi-a9b6d.firebaseapp.com",
  projectId: "komorebi-a9b6d",
  storageBucket: "komorebi-a9b6d.appspot.com",
  messagingSenderId: "423717522689",
  appId: "1:423717522689:web:c134209ba486f3ae1b1f00"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
