import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Category from './Category';

const AllCategory = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://resale-product-server.vercel.app/categories')
            const data = await res.json()
            return data

        }
    })

    return (
        <div >
            <h2 className='text-3xl text-red-500 mt-32 text-center'><i>Product Categories</i></h2>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4  '>
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>

        </div>
    );
};

export default AllCategory;