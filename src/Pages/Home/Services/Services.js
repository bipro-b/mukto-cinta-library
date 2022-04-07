import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    // fake data is loading from json 
    useEffect(() => {
        fetch('/book.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    // object is passing to service component
    return (
        <div className='services'>

            <Container className="my-2 col-md-10 ">
                <div className="mx-auto d-flex justify-content-center my-2">
                    <h3 style={{ color: 'AppWorkspace' }}><p className='animate'>Come to learn and Go to serve.</p></h3>
                </div>
                <Row xs={1} sm={2} md={2} lg={3} className="gy-2 mx-auto">

                    {
                        services.map(service => <Service key={service.key} service={service}></Service>)
                    }

                </Row>
            </Container>


        </div>
    );
};

export default Services; 