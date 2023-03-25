import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AllBuyer = () => {
    const [updates, setUpdates] = useState([])

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://resale-product-server.vercel.app/users/buyer')
            const data = await res.json()
            return data
        }
    })

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to Delete');
        if (proceed) {
            fetch(`https://resale-product-server.vercel.app/users/buyer/${id}`, {
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
            <h2 className="text-3xl text-orange-500 my-10 text-center"><i>All Buyers</i></h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
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
                                <td><button onClick={() => handleDelete(user?._id)} className='btn btn-xs btn-danger' >Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllBuyer;