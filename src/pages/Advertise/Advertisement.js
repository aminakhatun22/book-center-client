import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Advertise from './Advertise';

const Advertisement = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://resale-product-server.vercel.app/product')
            const data = await res.json()
            return data

        }
    })
    console.log(products);

    return (
        <div className='mt-36'>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1440px] mx-auto  '>
                {
                    products.map(product => <Advertise
                        key={product.id}
                        product={product}
                    ></Advertise>)
                }
            </div>

        </div>
    );
}

export default Advertisement;