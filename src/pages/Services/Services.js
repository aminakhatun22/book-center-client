import React from 'react';
import { FaArrowRight, FaBusAlt, FaCreativeCommonsNc, FaMoneyBillAlt, FaSms } from 'react-icons/fa';

const Services = () => {
    return (
        <div className='bg-black grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-24 mt-96'>
            <div className='flex  items-center text-white '>
                <FaBusAlt className='ml-5 text-3xl mr-5'></FaBusAlt>
                <div className='flex flex-col justify-between items-start '>
                    <h1>Safe delivery </h1>
                    <p>For all order over $39</p>
                </div>
            </div>

            <div className='flex  items-center text-white '>
                <FaSms className='text-3xl mr-5'></FaSms>
                <div className='flex flex-col justify-between items-start '>
                    <h1>Expert customer Service</h1>
                    <p>For a shopping experience</p>
                </div>
            </div>

            <div className='flex  items-center text-white'>
                <FaCreativeCommonsNc className='text-3xl mr-5'></FaCreativeCommonsNc>
                <div className='flex flex-col justify-between items-start '>
                    <h1>Amazing Value</h1>
                    <p>We offer competitive prices</p>
                </div>
            </div>
            <div>
                <div className='flex  items-center text-white'>
                    <FaMoneyBillAlt className='text-3xl mr-5'></FaMoneyBillAlt>
                    <div className='flex flex-col justify-between items-start '>
                        <h1>Safe Payment </h1>
                        <p>100% secure payment</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;