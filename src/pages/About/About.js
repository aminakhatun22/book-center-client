import React from 'react';
import brand from '../../images/icon/brand.svg';
import brand1 from '../../images/icon/brand1.svg';
import brand2 from '../../images/icon/brand2.svg';
import brand3 from '../../images/icon/brand3.svg';
import brand4 from '../../images/icon/brand4.svg';
import brand5 from '../../images/icon/brand5.svg';



const About = () => {

    return (
        <div className=' grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-6'>

            <img src={brand} className="w-1/7" alt='' />
            <img src={brand1} className="w-1/7" alt='' />
            <img src={brand2} className="w-1/7" alt='' />
            <img src={brand3} className="w-1/7" alt='' />
            <img src={brand4} className="w-1/7 " alt='' />
            <img src={brand5} className="w-1/7" alt='' />

        </div>
    );
};

export default About;