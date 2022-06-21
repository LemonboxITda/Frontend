import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Lemonbox</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/calendar">Calendar</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="mypage">My Page</NavDropdown.Item>
                                <NavDropdown.Item href="community">community</NavDropdown.Item>
                                <NavDropdown.Item href="post">post</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;