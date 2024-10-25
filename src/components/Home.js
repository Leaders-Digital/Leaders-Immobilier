import React from 'react';
import Navbar from './global-components/navbar-v3';
import Banner from './section-components/banner-v3';
import Category from './section-components/category-v3';
import SearchForm from './section-components/search-form';
import Features from './section-components/features-v1';
import Footer from './global-components/footer';

const Home = () => {
    return <div>
        <Navbar />
        <Banner />
        <SearchForm />
        <Features customClass="ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---"/>
        <Category />
        <Footer />
    </div>
}

export default Home

