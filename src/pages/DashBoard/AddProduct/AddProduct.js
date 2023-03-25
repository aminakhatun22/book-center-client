import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const categoryId = form.categoryId.value
        const Sname = form.sname.value
        const email = form.email.value
        const pname = form.pname.value
        const condition = form.condition.value
        const pic = form.pic.value
        const location = form.location.value
        const original = form.original.value
        const resale = form.resale.value
        const time = form.time.value
        const year = form.year.value

        const product = {
            category_id: categoryId,
            Seller: Sname,
            email: email,
            Product: pname,
            condition: condition,
            location,
            original,
            resale,
            year,
            time,
            pic
        }
        fetch('https://resale-product-server.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success("product placed successfully")
                    form.reset();
                    navigate('/dashboard/myproduct')


                }
            })
            .catch(err => console.error(err))

    }
    return (
        <div className='w-1/2 mx-auto border rounded-lg p-5 mt-12  bg-gray-100' >
            <form onSubmit={handleSubmit} className="card-body  bg-slate-300 mb-3 rounded">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category Id</span>
                    </label>
                    <input type="text" name='categoryId' placeholder="Category Id" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} name='sname' placeholder="seller name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" defaultValue={user?.email} name='email' placeholder="Email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" name='pname' placeholder="product name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Condition</span>
                    </label>
                    <input type="text" name='condition' placeholder="Product Condition" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" name='pic' placeholder="Picture of product" className="input input-bordered" />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text-area" name='location' placeholder="Location" className="input input-bordered" />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resale Price</span>
                    </label>
                    <input type="text" name='resale' d placeholder="Resale Price" className="input input-bordered" />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Original Price</span>
                    </label>
                    <input type="text" name='original' placeholder="Original Price" className="input input-bordered" />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Year of use</span>
                    </label>
                    <input type="text" name='year' placeholder="Year of use" className="input input-bordered" />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Time of post</span>
                    </label>
                    <input type="date" name='time' placeholder="Time of post" className="input input-bordered" />

                </div>
                <div className="form-control mt-6">
                    <input className="btn bg-gradient-to-r from-red-500 to-black text-white" type="submit" value="Add Product" />
                </div>
            </form>



        </div>
    );
};

export default AddProduct;