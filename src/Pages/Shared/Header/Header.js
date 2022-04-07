import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'
const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "blue"
    }
    const { user, logout } = useAuth();
    return (
        <div className="header" >
            <Navbar bg="blue" variant={"dark"} expand="lg">
                <Container>
                    <Navbar.Brand href="home">Library</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className=" mx-auto  my-lg-0"
                            style={{ maxHeight: '375px' }}
                            navbarScroll
                        >

                            <NavLink to="/" activeStyle={activeStyle}>Home</NavLink>
                            <NavLink to="/moreservices" activeStyle={activeStyle}>More</NavLink>
                            <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
                            {/* <NavLink to="/contact" activeStyle={activeStyle}>Contact</NavLink> */}


                        </Nav>

                        {user.email && <NavLink to="/dashboard" activeStyle={activeStyle}>Dashboard</NavLink>}

                        {user.email && <span style={{ color: 'white' }}>  {user.displayName}  </span>}
                        {
                            user.email ?
                                <button onClick={logout}>log Out</button> :
                                <NavLink to="/login">Login</NavLink>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    );
};

export default Header;