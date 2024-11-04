import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/login';
import Register from './components/register';
import Home from './components/Home';
import ShopGrid from './components/shop-grid';
import Louer from './components/louer';
import ProdductDetails from './components/product-details';
import Contact from './components/contact';

class Root extends Component {
    render() {
        return(
            <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Home />} />
              {/* <Route path="/vente" element={<ShopGrid />} /> */}
              <Route path="/louer" element={<Louer />} />
              <Route path="/product-details" element={<ProdductDetails />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('quarter'));
