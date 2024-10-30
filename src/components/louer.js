import React from 'react';
import Navbar from './global-components/navbar';
import LouerHeader from './global-components/louer-header';
import Louersidebar from './shop-components/louer-sidebar';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const ShopRightSidebarPage = () => {
    return <div>
        <Navbar />
        <LouerHeader />
        <Louersidebar />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default ShopRightSidebarPage

    