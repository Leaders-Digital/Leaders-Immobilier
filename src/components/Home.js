import React from 'react';
import Navbar from './global-components/navbar-v3';
import Banner from './section-components/banner-v3';
import Category from './section-components/category-v3';
import SearchForm from './section-components/search-form';
import Features from './section-components/features-v1';
import ProSlider from './section-components/product-slider-v1';
import ProSlider2 from './section-components/product-slider-v2';
import Map from './section-components/map';
import Video from './section-components/video-v2';
import Events from './section-components/gallery-v1';
import Testimonial from './section-components/testimonial-v1';
import Sponsor from './section-components/sponsor-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const Home = () => {
    return <div>
        <Navbar />
        <Banner  />
        <SearchForm />
        <Features customClass="ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---"/>
        <Category  />
        <ProSlider  />
        <ProSlider2  />
        <Map  />
        <Events  />
        {/* <Video  /> */}
        <Testimonial  />
        <Sponsor />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Home

