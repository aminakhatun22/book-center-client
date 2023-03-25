import React from 'react';
import img1 from '../../images/img1.jpeg'
import img2 from '../../images/img2.jpeg'
import ban5 from '../../images/ban5.png'
import './Bannar.css'

const Bannar = () => {
    return (
        <section>
            <div className="hero  bg-amber-200 h-96 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex'>
                        <img src={img1} className="animate-pulse rotate-45 hover:translate-x-6 rounded-lg mr-10 w-full shadow-2xl" alt='' />
                        <img src={img2} className="animate-pulse hover:-translate-x-6 rounded-lg  rotate-45  shadow-2xl" alt='' />
                    </div>
                    <div className='lg:w-1/2'>
                        <h1 className="text-5xl font-bold">What Book Are <br /> You Looking For</h1>
                        <p className="py-6" >Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className='btn btn-sm bg-gradient-to-r from-red-400 to-red-700  text-white'>Shop Now</button>
                    </div>
                </div>
            </div>
        </section>



    );
};

export default Bannar;