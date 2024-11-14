import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Event1 from './section-components/event1';
import Event2 from './section-components/event2';
import Event3 from './section-components/event3';

import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const Home_V2 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Événements" /> 
        <Event1  />   
        <Event3 /> 
        <Event2  />   
 
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Home_V2

