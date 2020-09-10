import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
export { default as Navigation } from "./Component/Navigation";
export { default as Footer } from "./Component/Footer";
export { default as Home } from "./Component/Home";
// export { default as Webinar } from "./Component/Webinar";
export { default as Landing } from "./Component/Landing";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
