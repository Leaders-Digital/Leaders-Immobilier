import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Vente from './shop-components/shop-right-sidebar';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const ShopRightSidebarPage = () => {
    return <div>
        <Navbar />
        <PageHeader  headertitle="Liste des biens à vendre" subheader="Vente"/>
        <Vente />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default ShopRightSidebarPage

