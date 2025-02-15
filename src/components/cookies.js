import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Cookies  from './section-components/Cookies';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const FaqV1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Politique de cookies"/>
        <Cookies />   
        <CallToActionV1 />
        <Footer />
    </div>
}

export default FaqV1

