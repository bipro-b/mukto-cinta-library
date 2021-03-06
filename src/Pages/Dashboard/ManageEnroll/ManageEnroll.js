import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

import './ManageEnroll.css'

const ManageEnroll = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://fierce-escarpment-93712.herokuapp.com/enroll')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    // delete order
    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete?')
        if (proceed) {
            const url = `https://fierce-escarpment-93712.herokuapp.com/enroll/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Deleted succesfully')
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }

                })
        }
    }

    return (
        <>

            <div>
                <h3 style={{ color: 'white' }}>Manage all enrolls</h3>
                <div className='title'>
                    <div>
                        Name
                    </div>
                    <div>
                        Course
                    </div>
                    <div>
                        Cancel
                    </div>
                    <div>
                        status
                    </div>

                </div>

                {
                    orders.map(order => <div key={order._id}>
                        <div className='allenr my-2'>
                            <div>
                                {order?.displayName}
                            </div>
                            <div>
                                {order.name}
                            </div>
                            <div>
                                <Button onClick={() => handleDelete(order._id)} variant="text">Delete</Button>
                            </div>
                            <div>
                                Paid
                            </div>

                        </div>

                        {/*  
                        <Grid className='manage' lg={10} sx={{ display: 'flex', width: '100%' }}>
                            <Grid sm={12} md={6} className='description' sx={{ border: '1px solid green', margin: '10px', backgroundColor: 'cyan' }}>
                                Ordered By: {order?.displayName} <br />
                                {order.name} <br />
                                {order.description}
                            </Grid>
                            <Grid className='mx-auto my-5' sm={12} md={6} sx={{ position: 'end' }}>
                                <Button onClick={() => handleDelete(order._id)} variant="contained">Delete</Button>
                            </Grid>
                        </Grid> */}

                    </div>)
                }
            </div>

        </>
    );
};

export default ManageEnroll;