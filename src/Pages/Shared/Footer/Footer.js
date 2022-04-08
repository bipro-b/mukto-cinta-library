import React from 'react';
import { } from 'react-bootstrap';

import "./Footer.css"

const Footer = () => {
    return (

        <div className=" footer  bottom-0 w-100 " >
            <div className="row">
                <div className="col-md-4">
                    <h2>Mukto-Cinta Library </h2>
                    <p>Come to learn</p>
                    authority©. ALl rights reseves.
                </div>
                <div className="col-md-4">
                    <h2>Our Services</h2>
                    <ul className=" mx-auto">
                        <li>Technical</li>
                        <li>Academic</li>
                        <li>Non academic</li>
                        <li>Non technical</li>
                        <li>Myth</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h3>Contact with us</h3>
                    <p> Email:b@yahoo.com</p>
                    <p> Phone number: 8989-7878-9090</p>
                    <div className="font-icon w-25 d-flex justify-content-center mx-auto justify-content-evenly">
                        <i class="fab fa-facebook"></i>
                        <i class="fas fa-envelope-open-text"></i>
                        <i class="fas fa-phone-volume"></i>
                    </div>

                </div>

            </div>

        </div>

    );
};

export default Footer; 