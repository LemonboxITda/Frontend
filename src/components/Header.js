import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import React, { useContext } from "react";
import { AuthContext } from "../App";

const Header = () => {
    const authContext = useContext(AuthContext);

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/calendar">Calendar</Nav.Link>
                            <Nav.Link href="/community">Community</Nav.Link>
                            {
                                authContext.state.token === null ? 
                                (
                                    <NavDropdown title="Login" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                                        <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
                                    </NavDropdown>
                                ) : (
                                    <NavDropdown title="My Page" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/mypage">My Page</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                                    </NavDropdown>
                                )
                            }
                            <Nav.Link href="/">Lemonbox</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;