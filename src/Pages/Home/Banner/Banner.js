import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import b1 from '../../../images/b1.jpg';
import b2 from '../../../images/b2.jpg';
import b3 from '../../../images/b3.jpg';
import b4 from '../../../images/b4.jpg';
import './Banner.css'
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container>
            <div className="banner m-5">
                <div className="row">
                    <div className="col-md-6 first-part animate__zoomIn">
                        <h2>Welcome to</h2>
                        <h2> <span className="text-info">Mukto-Cinta Library</span> reading point</h2>
                        <h4>Come  here to learn and go to serve.</h4>
                        <p>Our online Library is for the people who  are not able to come for learning physically. Scecially the rural people who are not able to get paid learing method/site.</p>
                        <h4>We hope you will stay with us. </h4>
                        <Link to="/about">
                            <button className="btn btn-primary">About Us</button>
                        </Link>
                    </div>
                    <div className="col-md-6 second-part">
                        <Carousel activeIndex={index} onSelect={handleSelect} >
                            <Carousel.Item>
                                <img
                                    className="d-block w-100  "

                                    src={b1}
                                    alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 "
                                    src={b2}
                                    alt="Second slide"
                                />


                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 "
                                    src={b3}
                                    alt="Third slide"
                                />


                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img img-fluid"

                                    src={b4}
                                    alt="Third slide"
                                />


                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Banner;