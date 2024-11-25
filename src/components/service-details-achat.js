import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ServiceDetails from './section-components/service-details-achat';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const Service_Details = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Détails des services"  subheader="Achat" />
        <ServiceDetails />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Service_Details

