import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Script from './Script';
import Aboutme from './Aboutme';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div class="script">
      <Script />
    </div>
    <div class="aboutme">
      <Aboutme />
    </div>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
