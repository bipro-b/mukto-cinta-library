import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import './MyEnroll.css'
const MyEnroll = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://fierce-escarpment-93712.herokuapp.com/enroll?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email])

    // delete car 
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
                <h3 className='inherit'>My Enrollment</h3>
                {
                    orders.map(order => <div key={order._id}>
                        <Grid className='enroll' lg={10} sx={{ display: 'flex', width: '90%', }}>
                            <Grid sm={12} md={6} className='description' sx={{ margin: '10px', backgroundColor: 'cyan' }}>
                                <br />
                                {order.name} <br />
                                {order.description}
                            </Grid>
                            <Grid className='mx-auto my-5' sm={12} md={6} >
                                <Button onClick={() => handleDelete(order._id)} variant="contained">Delete</Button>
                            </Grid>
                        </Grid>

                    </div>)
                }
            </div>

        </>
    );
};

export default MyEnroll;