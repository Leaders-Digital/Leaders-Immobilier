import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import EstimationForm from './section-components/estimation-form';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const Estimation = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Estimation" />
        <EstimationForm />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Estimation

