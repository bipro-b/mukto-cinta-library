
import { Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Take.css';

const Take = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const { bookId } = useParams();
    const [details, setDetails] = useState([]);
    const [bookDetails, setBookDetails] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])

    useEffect(() => {
        const choosedBook = details.find(
            serv => serv._id === bookId
        );
        setBookDetails(choosedBook);
    }, [details, bookId])


    const onSubmit = data => {

        axios.post('http://localhost:5000/enroll', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }
    return (
        <>
            <Header />
            <Grid sx={{ alignItems: 'center' }}>
                <Typography>
                    <img src={user.photoURL} alt="" />
                    <h2>Hey "{user?.displayName}" Welcome</h2>
                </Typography>
                <Typography sx={{ mx: 'auto' }}>
                    <img style={{ width: '50%' }} src={bookDetails?.thumb} alt="" />

                </Typography>
                <Typography style={{ margin: '0 50px 0 50px', alignItems: 'center' }}>
                    Name: {bookDetails?.category} <br />
                    Car details: {bookDetails?.description}
                </Typography>
            </Grid>

            <div className="take">
                <h3>Fill the purchase form</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={bookDetails?.course} {...register("name", { required: true })} />
                    <input defaultValue={bookDetails?.category} {...register("description", { required: true })} />
                    <input defaultValue={user?.displayName} {...register("displayName", { required: true, maxLength: 20 })} />
                    <input defaultValue={user?.email} {...register("email", { required: true, maxLength: 50 })} />


                    <input type="address" {...register("address")} placeholder="address" />
                    <input type="address" {...register("city")} placeholder="city" />
                    <input type="number" {...register("phone")} placeholder="your phone number" />
                    <input type="submit" />
                </form>

            </div>
            <Footer />
        </>
    );
};

export default Take;