import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Portfolio from './section-components/portfolio-v2';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';


const About_v1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Histoires" />       
        <Portfolio />
        <CallToActionV1 />
        <Footer />
   
    </div>
}

export default About_v1

