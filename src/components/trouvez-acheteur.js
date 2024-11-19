import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import TrouverAcheteur from './section-components/trouvez-acheteur-form';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const TrouverAcheteurV1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Trouver un acheteur " />
        <TrouverAcheteur />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default TrouverAcheteurV1

