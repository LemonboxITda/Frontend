import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
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

                            {/* 로그아웃 후 */}
                            {/* <NavDropdown title="My Page" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/mypage">My Page</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                            </NavDropdown> */}

                            {/* 로그아웃 전 */}
                            <Nav.Link href="/login">Login</Nav.Link>

                            <Nav.Link href="/">Lemonbox</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;