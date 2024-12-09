import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import AboutV4 from './about/about-lac';
import Team from './section-components/team-lac';
import MapLac from './about/map-lac';
import Testimonial from './section-components/testimonial-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';


const About_v1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="À PROPOS" />
        <AboutV4 />
        {/* <Team /> */}
        <MapLac />
        {/* <Testimonial /> */}
        <CallToActionV1 />
        <Footer />
    </div>
}

export default About_v1

