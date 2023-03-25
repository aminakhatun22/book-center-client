import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Categories = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://resale-product-server.vercel.app/categories')
            const data = await res.json()
            return data

        }
    })

    return (
        <div className='mt-36'>
            <div className='flex justify-between'>
                <h2 className='text-3xl text-red-500 '><i>Product Categories</i></h2>
                <div className='flex justify-center items-center'>
                    <Link to="/categories"> <button className='btn bg-gradient-to-r from-red-400 to-red-700  text-black'>see more<FaArrowRight className='ml-5  text-black '></FaArrowRight></button></Link>
                </div>
            </div >
            <div className='grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4  '>
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div >
    );
};

export default Categories;