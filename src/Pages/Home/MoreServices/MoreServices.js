import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import MoreService from '../MoreService/MoreService';


const MoreServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="">
            <Header />
            <h3>Our Services</h3>
            <Container>
                <Row sm={1} md={2} lg={3} className="g-3">

                    {
                        services.map(service => <MoreService key={service.id} service={service}></MoreService>)
                    }

                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default MoreServices;