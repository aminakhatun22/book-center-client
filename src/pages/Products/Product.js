import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaCheck } from 'react-icons/fa';
import BookNow from '../BookNow/BookNow';

const Product = ({ product }) => {

    const { pic, Seller, location, original, resale, year, time, Product, } = product;


    return (
        <div>
            <div className="card bg-base-100 shadow-xl border mt-20 p-4">
                <figure className="px-10 pt-10">
                    <img src={pic} alt="Shoes" className="rounded-xl w-full h-96" />
                </figure>
                <div className="card-body items-center text-center">
                    <div className='flex justify-center items-center'>
                        <h2 className="card-title">{Product} </h2>
                    </div>
                </div>
                <div className='grid gap-4 grid-cols-2 px-5 mb-4'>
                    <p><span className='text-xl text-red-500 mr-2 font-semibold'>Location:</span>{location}</p>
                    <p><span className='text-xl text-red-500 mr-2 font-semibold'>Seller:</span>{Seller}</p>
                    <p><span className='text-xl text-red-500 mr-2 font-semibold'>original price:</span>{original}</p>
                    <p><span className='text-xl text-red-500 mr-2 font-semibold'>resale price:</span>{resale}</p>
                    <p><span className='text-xl text-red-500 mr-2 font-semibold'>Year of use:</span>{year}</p>
                    <p><span className='text-xl text-red-500 mr-2 font-semibold'>Post Date:</span>{time}</p>


                </div>
                <label

                    htmlFor="booking-modal"
                    className='w-full btn bg-gradient-to-r from-red-400 to-red-700  text-black'
                >Book Now</label>
            </div>

            {
                <BookNow
                    product={product}
                ></BookNow>
            }
        </div>
    );
};

export default Product;