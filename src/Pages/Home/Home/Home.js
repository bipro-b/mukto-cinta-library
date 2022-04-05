import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>

        </div>
    );
};

export default Home;

/* {
    "id": "1009",
    "category": "Technical",
    "course": "Android Developing",
    "price": "3000",
    "thumb": "https://bs-uploads.toptal.io/blackfish-uploads/uploaded_file/file/194722/image-1582811959686-b31494c241bebb769c3001a8d24cdc16.png"
},
{
    "id": "10010",
    "category": "Technical",
    "course": "Advance Java",
    "price": "2000",
    "thumb": "https://programmerspoint.in/images/advanced-java-course.jpg"
     {
        "id": "1004",
        "category": "Technical",
        "course": "Data Science with Python",
        "price": "500",
        "thumb": "https://prutor.ai/wp-content/uploads/data-science-using-python.png"
    },
} */