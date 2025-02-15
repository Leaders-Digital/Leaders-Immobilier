import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
});
