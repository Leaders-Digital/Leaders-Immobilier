import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/login';
import Register from './components/register';
import Home from './components/Home';
import ShopGrid from './components/shop-grid';
import About from './components/about';
import Louer from './components/louer';
import Story from './components/Story';
import Events from './components/events';
import Estimation from './components/estimation';
import TrouverAcheteur from './components/trouvez-acheteur';
import Agence from './components/agence';
import ProdductDetails from './components/product-details';
import ProdductDetailsTest from './components/product-details-test';
import Contact from './components/contact';

class Root extends Component {
    render() {
        return(
            <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/agence" element={<Agence />} />
              <Route path="/vente" element={<ShopGrid />} />
              <Route path="/louer" element={<Louer />} />
              <Route path="/product-details/:id" element={<ProdductDetails />} />
              <Route path="/product-details/test" element={<ProdductDetailsTest />} />
              <Route path="/histoires" element={<Story />} />
              <Route path="/events" element={<Events />} />
              <Route path="/estimation" element={<Estimation />} />
              <Route path="/acheteur" element={<TrouverAcheteur />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('quarter'));
