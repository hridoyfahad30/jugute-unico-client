import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import CustomTabs from '../CustomTabs/CustomTabs';
import AllBrands from '../AllBrands/AllBrands';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Gallery></Gallery>
           <CustomTabs></CustomTabs>
           <AllBrands></AllBrands>
        </div>
    );
};

export default Home;