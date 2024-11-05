import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../assets/logo.png';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home.js";
import History from "../pages/History.js";
import Moder from "../pages/Moder.js";

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="light" variant="light" >
                    <Container>
                        <Navbar.Brand href="/" >
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="mr-auto" >
                                <Nav.Link href="/" > Home </Nav.Link>
                                <Nav.Link href="/history" > History </Nav.Link>
                                <Nav.Link href="/moder" > Moder </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route exact path="/" Component={Home} />
                        <Route exact path="/History" Component={History} />
                        <Route exact path="/Moder" Component={Moder} />
                    </Routes>
                </Router>
            </>
        )
    }
}