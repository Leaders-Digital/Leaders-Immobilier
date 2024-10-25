import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';


class Root extends Component {
    render() {
        return(
            <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('quarter'));
