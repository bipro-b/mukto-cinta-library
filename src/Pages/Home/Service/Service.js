import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './Service.css'

const Service = (props) => {
    const { course, category, thumb } = props.service;
    // Showing to UI service components 
    return (
        <Container>
            <Col className="ms-5">
                <Card className="card h-100 w-100">
                    <Card.Img style={{ height: '150px' }} variant="top" src={thumb} />
                    <Card.Body>
                        <Card.Title>Course:{course}
                        </Card.Title>
                        <p>Category: {category}</p>
                        {/* <p>Price:{price} ৳</p> */}
                        <Link to="/enroll"> <button style={{ alignItems: 'center', marginLeft: "40px" }} className="btn btn-primary ms-40px">Take</button></Link>
                    </Card.Body>



                </Card>


            </Col>
        </Container>
    );
};

export default Service;