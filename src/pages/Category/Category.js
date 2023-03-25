import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { name, description, img, category_id } = category;
    return (
        <div className=" flex flex-col items-center text-center mt-32" >

            <img src={img} alt="" className='w-1/2 h-40 rounded-full' />

            <div >
                <h2 className="card-title mt-3">{name} </h2>
                <div className='flex justify-center items-center'>
                    <p className='text-red-500 text-xl'>see more</p>
                    <Link to={`/category/${category_id}`}> <button>    <FaArrowRight className='ml-5 mt-3 text-red-500 '></FaArrowRight></button></Link>
                </div>
                <p>{description}</p>
            </div>
        </div >
    );
};

export default Category;