import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ProductSlider from './shop-components/product-slider-test';
import ProductDetails from './shop-components/shop-details-test';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const Product_Details = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Propriétés" subheader="Propriétés"  customclass="mb-0" />
        <ProductSlider />
        <ProductDetails />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Product_Details

