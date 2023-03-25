import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [updates, setUpdates] = useState([])

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://resale-product-server.vercel.app/myproduct?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to Delete');
        if (proceed) {
            fetch(`https://resale-product-server.vercel.app/product/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        refetch()
                        toast.success('Deleted successfully')
                        const remaining = updates.filter(up => up._id !== id);
                        setUpdates(remaining);
                    }
                })
        }
    }




    const handleUpdate = id => {
        fetch(`https://resale-product-server.vercel.app/product/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify({ status: 'sold' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(' Update successfully')
                    const remaining = updates.filter(up => up._id !== id);
                    const approving = updates.find(up => up._id === id);
                    approving.status = 'sold'
                    const newUpdates = [approving, ...remaining];
                    setUpdates(newUpdates);


                }
            })
    }



    return (
        <div>
            <h2 className="text-3xl text-orange-500 text-center my-10"><i>My Products</i></h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.Product}</td>
                                <td>{product.resale}</td>

                                <td>
                                    <button onClick={() => handleUpdate(product._id)} className="btn btn-primary btn-xs">{product.status ? product.status : 'Available'}</button>
                                </td>

                                <td><button onClick={() => handleDelete(product._id)} className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;