import React from 'react';
import toast from 'react-hot-toast';

const Advertise = ({ product }) => {
    const { pic, Product, status } = product
    console.log(product)


    return (
        <div>
            {
                status ?
                    <>
                        <div className=" hidden  card bg-base-100 shadow-xl border mt-20 p-4 ">
                            <figure className="px-10 pt-10">
                                <img src={pic} alt="Shoes" className="rounded-xl w-full h-96" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <div className='flex justify-center items-center'>
                                    <h2 className="card-title">{Product} </h2>
                                </div>
                            </div>


                        </div>
                    </>
                    :
                    <>
                        <div className="card bg-base-100 shadow-xl border mt-20 p-4 ">
                            <figure className="px-10 pt-10">
                                <img src={pic} alt="Shoes" className="rounded-xl w-full h-96" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <div className='flex justify-center items-center'>
                                    <h2 className="card-title">{Product} </h2>
                                </div>
                            </div>


                        </div>
                    </>
            }
        </div>




    );
};

export default Advertise;