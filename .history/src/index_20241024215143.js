import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";


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
