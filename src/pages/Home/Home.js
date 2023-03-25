import React from 'react';
import About from '../About/About';
import Advertisement from '../Advertise/Advertisement';
import AllProducts from '../AllProducts/AllProducts';
import Bannar from '../Bannar/Bannar';
import Categories from '../Category/Categories';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>

            <Bannar></Bannar>
            <About></About>
            <Categories></Categories>
            <AllProducts></AllProducts>
            <Services></Services>

        </div>
    );
};

export default Home;