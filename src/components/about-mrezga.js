import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import AboutV4 from './about/about-mrezga';
import MapMrezga from './about/map-mrezga';
import Team from './section-components/team-v1';

import BlogSlider from './blog-components/blog-slider-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';


const About_v1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="À PROPOS" />
        <AboutV4 />
      
        <Team />
        <MapMrezga />
        {/* <Testimonial /> */}
     
        <CallToActionV1 />
        <Footer />
    </div>
}

export default About_v1

