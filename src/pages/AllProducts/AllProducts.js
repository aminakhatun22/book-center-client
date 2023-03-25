import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Product from '../Products/Product';

const AllProducts = () => {

    const { data: products = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://resale-product-server.vercel.app/product')
            const data = await res.json()
            return data
        }
    })

    return (
        <div className='mt-32'>
            <div className='flex justify-between'>
                <h2 className='text-3xl text-red-500 '><i>Product Categories</i></h2>
                <div className='flex justify-center items-center'>
                    <Link to="/product"> <button className='btn bg-gradient-to-r from-red-400 to-red-700  text-black'>see All<FaArrowRight className='ml-5  text-black '></FaArrowRight></button></Link>
                </div>
            </div >
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1440px] mx-auto  mt-10 '>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;