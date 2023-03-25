import React from 'react';
import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

const AddCategory = () => {
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const categoryId = form.categoryId.value
        const name = form.name.value
        const pic = form.pic.value


        const product = {
            category_id: categoryId,
            img: pic,
            name: name
        }
        fetch('https://resale-product-server.vercel.app/category', {
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
                    toast.success("Added successfully")
                    form.reset();
                    Navigate('/category')


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
                        <span className="label-text">Category Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Category name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" name='pic' placeholder="Picture of product" className="input input-bordered" />

                </div>

                <div className="form-control mt-6">
                    <input className="btn bg-gradient-to-r from-red-500 to-black text-white" type="submit" value="Add Product" />
                </div>
            </form>



        </div>
    );
};

export default AddCategory;