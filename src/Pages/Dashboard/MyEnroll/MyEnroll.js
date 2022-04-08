import { Box, Button, Grid } from '@mui/material';
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
                <h3 style={{ color: 'white' }}>My Enrollment</h3>
                <div className='enrtitle'>
                    <div>
                        My name
                    </div>
                    <div>
                        Cancel
                    </div>
                    <div>
                        Status
                    </div>

                </div>
                {
                    orders.map(order => <div key={order._id}>

                        <div className='enr my-2'>
                            <div>
                                {order.name}
                            </div>
                            <div>
                                <Button onClick={() => handleDelete(order._id)} variant="text">Delete</Button>
                            </div>
                            <div>
                                Inprogress
                            </div>

                        </div>

                        {/*  <Grid className='enroll' lg={10} >
                            <Grid >

                                {order.name}

                            </Grid>
                            <Grid  >
                                <Button onClick={() => handleDelete(order._id)} variant="text">Delete</Button>
                            </Grid>
                        </Grid> */}

                    </div>)
                }
            </div>

        </>
    );
};

export default MyEnroll;