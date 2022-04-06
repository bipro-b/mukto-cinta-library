import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Take = () => {
    const { user } = useAuth();
    let { serviceId } = useParams();
    const [details, setDetails] = useState([]);
    const [BookDetails, setBookDetails] = useState({});
    useEffect(() => {
        fetch('/book.json')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])

    // console.log(details);
    // const b = details.filter(sv => sv.id === serviceId);
    // console.log(b[0]);
    // const found = details.filter(serv => serv.id === serviceId);
    useEffect(() => {
        const foundBook = details.find(
            serv => serv.id === serviceId
        );
        setBookDetails(foundBook);
    }, [details, serviceId])
    console.log(BookDetails);
    return (
        <>
            <Header></Header>
            <div className="mx-auto">

                <Grid sx={{ alignItems: 'center' }}>
                    <Typography>
                        <img src={user.photoURL} alt="" />
                        <h2 style={{ color: 'white' }}>Hey "{user?.displayName}" Welcome</h2>
                    </Typography>
                    <Typography sx={{ mx: 'auto' }}>
                        <img style={{ width: '50%' }} src={BookDetails?.thumb} alt="" />

                    </Typography>
                    <Typography style={{ margin: '0 50px 0 50px', alignItems: 'center' }}>
                        Name: {BookDetails?.course} <br />
                        details: {BookDetails?.description}
                    </Typography>
                </Grid>
                <Container>
                    <Col className="ms-5">
                        <Card className="card h-100 w-50">
                            <Card.Img style={{ height: '250px' }} variant="top" src={BookDetails?.thumb} />
                            <Card.Body>
                                <Card.Title>{BookDetails?.category}
                                </Card.Title>
                                <p> {BookDetails?.course}</p>
                                <p> Price: {BookDetails?.price} $</p>
                                <Link to="/enroll"> <button style={{ alignItems: 'center', marginLeft: "40px" }} className="btn btn-primary ms-40px">Enroll Now</button></Link>
                            </Card.Body>



                        </Card>


                    </Col>
                </Container>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Take;