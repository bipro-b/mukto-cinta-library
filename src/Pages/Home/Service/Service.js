import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { course, category, thumb, id } = props.service;
    // Showing to UI service components 
    return (
        <Container className="service  ">

            <Col className=" ms-5" >
                <Card className="snap  card h-100">
                    <Card.Img style={{ height: '150px' }} variant="top" src={thumb} />
                    <Card.Body>
                        <Card.Title >Course:{course}
                        </Card.Title>
                        <p >Category: {category}</p>
                        {/* <p>Price:{price} ৳</p> */}
                        <Link to={`/book/${id}`}> <button style={{ alignItems: 'center', marginLeft: "40px" }} className="btn btn-primary ms-40px">Take</button></Link>
                    </Card.Body>



                </Card>


            </Col>
        </Container>
    );
};

export default Service;