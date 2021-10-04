import React from 'react';
import {Container, Nav, Navbar } from 'react-bootstrap';
import {NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="secondary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="" className="fw-bold fs-lg" style={{ fontFamily: 'cursive' }}>
                        NFam Language
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className='nav-link'>
                            <NavLink activeStyle={{
                                fontWeight: "bold",
                                color: "#fafbfa"
                            }} to='/home'>Home</NavLink>
                            <NavLink activeStyle={{
                                fontWeight: "bold",
                                color: "#fafbfa"
                            }} to='/services'>Services</NavLink>
                            <NavLink activeStyle={{
                                fontWeight: "bold",
                                color: "#fafbfa"
                            }} to='/locations'>Our Locations</NavLink>
                            <NavLink activeStyle={{
                                fontWeight: "bold",
                                color: "#fafbfa"
                            }} to='/about'>About</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;