import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Product from '../Products/Product';

const Allproduct = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://resale-product-server.vercel.app/products')
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
            <h1 className='mt-10 text-red-500 text-center text-5xl italic' >All Products </h1>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
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

export default Allproduct;