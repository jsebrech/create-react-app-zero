import { React, ReactDOM, html } from './imports.js';
import App from './App.js';
// import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  html`
  <${React.StrictMode}>
    <${App} />
  <//>
  `
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
