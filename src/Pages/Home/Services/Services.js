import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import Service from '../Service/Service';


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
        <div>

            <Container className="my-5">
                <div className="mx-auto d-flex justify-content-center my-2">
                    <h3 style={{ color: 'AppWorkspace' }}>Our best services</h3>
                </div>
                <Row xs={1} sm={2} md={3} lg={4} className="gy-2 mx-auto">

                    {
                        services.map(service => <Service key={service.key} service={service}></Service>)
                    }

                </Row>
            </Container>


        </div>
    );
};

export default Services; 