import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import React, { useContext } from "react";
import { AuthContext } from "../App";

const Header = () => {
    const authContext = useContext(AuthContext);

    return (
        <>
            {
                authContext.state.token && authContext.state.role === 'ROLE_ADMIN' ? (
                    // 관리자
                    <Navbar bg="light" >
                        <Container>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/admin/users">회원 관리</Nav.Link>
                                    <Nav.Link href="/admin/community">커뮤니티 관리</Nav.Link>
                                    <Nav.Link href="/logout">로그아웃</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                ) : (
                    // 일반 회원 
                    <Navbar bg="light" expand="sm">
                        <Container>
                            <Navbar.Brand href="/"><i class="bi bi-house"></i></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/calendar">캘린더</Nav.Link>
                                    <Nav.Link href="/community">커뮤니티</Nav.Link>
                                    {
                                        authContext.state.token === null ?
                                            (
                                                <NavDropdown title="로그인" id="basic-nav-dropdown">
                                                    <NavDropdown.Item href="/login">로그인</NavDropdown.Item>
                                                    <NavDropdown.Item href="/signup">회원가입</NavDropdown.Item>
                                                </NavDropdown>
                                            ) : (
                                                <NavDropdown title="마이페이지" id="basic-nav-dropdown">
                                                    <NavDropdown.Item href="/mypage">마이페이지</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item href="/logout">로그아웃</NavDropdown.Item>
                                                </NavDropdown>
                                            )
                                    }
                                    <Nav.Link href="https://lifevitamin.kr/" target='_blank' rel='noreferrer'>인생몰 바로가기</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                )
            }
        </>
    )
}

export default Header;