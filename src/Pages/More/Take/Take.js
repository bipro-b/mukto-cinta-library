
import { Grid, Typography } from '@mui/material';
// import axios from 'axios';
import React, { useEffect, useState } from 'react';

// import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Take.css'
// import './Shipping.css'

const Take = () => {
    // const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    let { courseId } = useParams();
    const [details, setDetails] = useState([]);
    const [courseDetails, setCourseDetails] = useState({});

    useEffect(() => {
        fetch('/book.json')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])

    useEffect(() => {
        const chooseCourse = details.find(
            serv => serv._id === courseId
        );
        setCourseDetails(chooseCourse);
    }, [details, courseId])


    // const onSubmit = data => {

    //     axios.post('https://peaceful-ridge-87447.herokuapp.com/orders', data)
    //         .then(res => {
    //             if (res.data.insertedId) {
    //                 alert('Added successfully');
    //                 reset();
    //             }
    //         })
    // }
    return (
        <>
            <Header />

            <Grid className='take' sx={{ alignItems: 'center' }}>
                <Typography>
                    <img src={user.photoURL} alt="" />
                    <h2>Hey "{user?.displayName}" Welcome</h2>
                </Typography>
                <Typography sx={{ mx: 'auto', width: '300px', height: '300px' }}>
                    <img src={courseDetails?.thumb} alt="" />

                </Typography>
                <Typography style={{ alignItems: 'center' }}>
                    Category: {courseDetails?.category} <br />
                    details: {courseDetails?.description}
                </Typography>
            </Grid>

            {/*    <div className="add-car">
                <h3>Fill the purchase form</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={carDetails?.name} {...register("name", { required: true })} />
                    <input defaultValue={carDetails?.description} {...register("description", { required: true })} />
                    <input defaultValue={user?.displayName} {...register("displayName", { required: true, maxLength: 20 })} />
                    <input defaultValue={user?.email} {...register("email", { required: true, maxLength: 50 })} />


                    <input type="address" {...register("address")} placeholder="address" />
                    <input type="address" {...register("city")} placeholder="city" />
                    <input type="number" {...register("phone")} placeholder="your phone number" />
                    <input type="submit" />
                </form>

            </div> */}
            <Footer></Footer>
        </>
    );
};

export default Take;