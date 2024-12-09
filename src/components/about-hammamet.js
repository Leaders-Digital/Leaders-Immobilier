import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import AboutV4 from './about/about-hammamet';

import MapHammamet from './about/map-hammamet';
import Team from './section-components/team-hammamet';
import Video from './section-components/video-hammamet';

import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';


const About_v1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="À PROPOS" />
        <AboutV4 />
   
   
        <Team />

        <Video />
      
        <MapHammamet />

        {/* <Testimonial /> */}
  
        <CallToActionV1 />
        <Footer />
    </div>
}

export default About_v1

