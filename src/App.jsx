import React from 'react'
import Login from './components/login';
import Register from './components/register';
import Home from './components/Home';
import ShopGrid from './components/shop-grid';
import AboutLac from './components/about-lac';
import AboutHammamet from './components/about-hammamet';
import AboutMrezga from './components/about-mrezga';
import AboutKelibia from './components/about-kelibia';
import AboutAouina from './components/about-aouina';
import AboutMilano from './components/about-milano';
import Louer from './components/louer';
import Story from './components/Story';
import Events from './components/events';
import Estimation from './components/estimation';
import TrouverAcheteur from './components/trouvez-acheteur';
import Agence from './components/agence';
import ProdductDetails from './components/product-details';
import ProdductDetailsTest from './components/product-details-test';
import Contact from './components/contact';
import Location from './components/location';
import Mentions from './components/mentions';
import Cookies from './components/cookies';
import Confidentialite from './components/confidentialité';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
    return(
        <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/about/lac" element={<AboutLac  />} />
          <Route path="/about/hammamet" element={<AboutHammamet  />} />
          <Route path="/about/mrezga" element={<AboutMrezga  />} />
          <Route path="/about/kelibia" element={<AboutKelibia  />} />
          {/* <Route path="/about/aouina" element={<AboutAouina  />} /> */}
          <Route path="/about/milano" element={<AboutMilano  />} />
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
          <Route path="/map" element={<Location />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/Confidentialite" element={<Confidentialite />} />
        </Routes>
      </Router>
    )
  
}

export default App