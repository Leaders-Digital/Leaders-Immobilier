import React from 'react';
import Navbar from './global-components/navbar-v3';
import Banner from './section-components/banner-v3';
import SearchForm from './section-components/search-form';
import Features from './section-components/features-v1';
import ProductSlider from './section-components/product-slider-v3';
import FeaturedItem from './section-components/featured-item-v1';
import Video from './section-components/video-v1';
import Testimonial from './section-components/testimonial-v3';
import Sponsor from './section-components/sponsor-v1';
import BlogSlider from './blog-components/blog-slider-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const Home = () => {
    return <div>
        <Navbar />
        <Banner />
     
        <Footer />
    </div>
}

export default Home

