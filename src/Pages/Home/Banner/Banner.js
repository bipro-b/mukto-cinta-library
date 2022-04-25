
import React from 'react';
import { Carousel } from 'react-bootstrap';
import b1 from '../../../images/b1.jpg';
import b2 from '../../../images/b2.jpg';
import b3 from '../../../images/b3.jpg';


import './Banner.css';
const Banner = () => {
    return (

        <Carousel className='banner'>
            <Carousel.Item interval={4000}>
                <img
                    className="d-block w-100"
                    src={b1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>Welcome to</h2>
                    <h2>Mukto-cinta Library.</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={b2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Gain Knowledge 📖</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={b3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Build your nation</h3>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


    );
};

export default Banner;