import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa';


const AllSeller = () => {
    const [updates, setUpdates] = useState([])
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://resale-product-server.vercel.app/users/seller')
            const data = await res.json()
            return data
        }
    })


    const handleUpdate = id => {
        fetch(`https://resale-product-server.vercel.app/users/seller/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify({ status: 'verified' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(' Update successfully')
                    const remaining = updates.filter(up => up._id !== id);
                    const approving = updates.find(up => up._id === id);
                    approving.status = 'verified'
                    const newUpdates = [approving, ...remaining];
                    setUpdates(newUpdates);


                }
            })
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to Delete');
        if (proceed) {
            fetch(`https://resale-product-server.vercel.app/users/seller/${id}`, {
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
    return (
        <div>
            <h2 className="text-3xl text-orange-500 my-10 text-center"><i>All Sellers</i></h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    {
                                        user?.status ?
                                            <FaCheck className=' text-blue-600 text-2xl'></FaCheck>
                                            :
                                            <button onClick={() => handleUpdate(user._id)} className="btn btn-primary btn-xs">{user.status ? user.status : 'Unverified'}</button>
                                    }
                                </td>
                                <td><button onClick={() => handleDelete(user?._id)} className='btn btn-xs btn-danger' >Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllSeller;