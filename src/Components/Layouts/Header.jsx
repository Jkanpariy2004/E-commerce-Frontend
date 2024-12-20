import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <header>
                <div className="container my-3">
                    <Navbar expand="lg">
                        <Navbar.Brand href="/" className="logo">
                            <span>E</span> Commerce
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Link className={`${location.pathname === "/" ? "Headeractive" : ""} nav-link`} to="/">
                                    Home
                                </Link>
                                <Link className={`${location.pathname === "/about" ? "Headeractive" : ""} nav-link`} to="/about">
                                    About Us
                                </Link>

                                <Link className={`${location.pathname === "/services" ? "Headeractive" : ""} nav-link`} to="/services">
                                    Services
                                </Link>
                                <Link className={`${location.pathname === "/projects" ? "Headeractive" : ""} nav-link`} to="/projects">
                                    Projects
                                </Link>
                                <Link className={`${location.pathname === "/blogs" ? "Headeractive" : ""} nav-link`} to="/blogs">
                                    Blogs
                                </Link>
                                <Link className={`${location.pathname === "/contact-us" ? "Headeractive" : ""} nav-link`} to="/contact-us">
                                    Contact Us
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </header>
        );
    }
}

export default Header;
