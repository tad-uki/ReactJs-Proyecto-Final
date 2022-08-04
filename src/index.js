import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCONSaoFrLSdRa5YKKeUrDKL1MHxxtFyLc",
  authDomain: "e-commerce-react-jablonski.firebaseapp.com",
  projectId: "e-commerce-react-jablonski",
  storageBucket: "e-commerce-react-jablonski.appspot.com",
  messagingSenderId: "231508635305",
  appId: "1:231508635305:web:ba96d9ae26540828ca43b8"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
