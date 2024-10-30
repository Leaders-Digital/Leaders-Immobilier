import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import ShopGrid from './components/shop-grid';
import Louer from './components/louer';

class Root extends Component {
    render() {
        return(
            <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vente" element={<ShopGrid />} />
              <Route path="/louer" element={<Louer />} />
            </Routes>
          </Router>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('quarter'));
