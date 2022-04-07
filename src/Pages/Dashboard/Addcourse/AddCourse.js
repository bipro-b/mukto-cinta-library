import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

import './AddCourse.css';

const AddCourse = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/courses', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfullt');
                    reset();
                }
            })
    }
    return (
        <>

            <div className="add-car">
                <h3>Add new Course</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("course", { required: true, maxLength: 20 })} placeholder="Course name" />

                    <textarea {...register("category")} placeholder="Category" />
                    <input type="number" {...register("price")} placeholder="price" />
                    <input {...register('img')} placeholder="upload image" />
                    <input type="submit" />
                </form>

            </div>

        </>
    );
};

export default AddCourse;