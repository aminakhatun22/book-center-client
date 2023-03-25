import React, { useContext } from 'react';
import toast from 'react-hot-toast';

import { AuthContext } from '../../context/AuthProvider';

const BookNow = ({ product }) => {

    const { user } = useContext(AuthContext)
    const { location, resale, Product, pic } = product;
    console.log(product);


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.resale.value;
        const meeting = form.meeting.value;
        const location = form.location.value;
        const product = form.product.value;
        const pic = form.pic.value
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            meeting_location: meeting,
            item_name: product,
            pic: pic,
            Seller: name,
            email,
            location,
            phone,
            price
        }


        fetch('https://resale-product-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booking confirmed');

                }
                else {
                    toast.error(data.message);
                }
            })


    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>

                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />

                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />


                        <input type="text" defaultValue={pic} name='pic' placeholder="Picture of product" className="input input-bordered" />



                        <input name="location" type="text" defaultValue={location} disabled placeholder="Location" className="input w-full input-bordered" />

                        <input name="product" type="text" defaultValue={Product} disabled placeholder="Item Name" className="input w-full input-bordered" />
                        <input name="resale" type="text" defaultValue={resale} disabled placeholder="Price" className="input w-full input-bordered" />

                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input name="meeting" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Buy" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookNow;