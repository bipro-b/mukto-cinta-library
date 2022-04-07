import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './ManageCourses.css'
const ManageCourses = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://fierce-escarpment-93712.herokuapp.com/courses')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])

    // delete car 
    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete?')
        if (proceed) {
            const url = `https://fierce-escarpment-93712.herokuapp.com/courses/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Deleted succesfully')
                        const remaining = cars.filter(car => car._id !== id);
                        setCars(remaining);
                    }

                })
        }
    }

    return (
        <>

            <div>
                <h3 style={{ color: 'white' }}>Manage all cars</h3>
                {
                    cars.map(car => <div className='edit row' key={car._id}>


                        <div className='col' > <h3 style={{ marginLeft: '30px', textAlign: 'left' }}>{car.course}</h3></div>
                        <div className='col ' style={{ alignItems: 'center' }} >
                            <Button onClick={() => handleDelete(car._id)} variant="contained">Delete</Button>
                        </div>
                    </div>)
                }
            </div>

        </>
    );
};

export default ManageCourses;