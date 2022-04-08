import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MoreService.css'

const MoreService = (props) => {
    const { course, category, thumb, _id } = props.service;
    // Showing to UI service components 
    return (
        <Container className="service  ">

            <Col className=" " >
                <Card className="snap  card h-100">
                    <Card.Img style={{ height: '190px' }} variant="top" src={thumb} />
                    <Card.Body>
                        <Card.Title >Course:{course}
                        </Card.Title>
                        <p >Category: {category}</p>
                        {/* <p>Price:{price} ৳</p> */}
                        <Link to={`/book/${_id}`}> <button className="btn btn-success ">Take</button></Link>
                    </Card.Body>

                </Card>


            </Col>
        </Container >
    );
};

export default MoreService;

/* {`/book/${id}`} */