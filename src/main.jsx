import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; 
import App from "./App/App";
import './css/index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
