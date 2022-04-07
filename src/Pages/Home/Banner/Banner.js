
import React from 'react';
// import { Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import b1 from '../../../images/b1.jpg';
// import b2 from '../../../images/b2.jpg';
// import b3 from '../../../images/b3.jpg';
// import b4 from '../../../images/b4.jpg';
// import ban1 from '../../../images/ban1.jpg';
import './Banner.css';
const Banner = () => {
    /* const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
 */
    return (
        // <Container>

        <div className="row banner ">
            <div className="banner-container ">
                <h2 style={{ color: 'crimson', marginTop: '60px' }}>Welcome to</h2>
                <h2> <span style={{ color: 'khaki' }}>Mukto-Cinta Library</span> </h2>

                <Link to="/about">
                    <button className="btn btn-primary round">About Us</button>
                </Link>
            </div>
        </div>

    );
};

export default Banner;